import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
  Transaction,
} from "globalpayments-api";
import { cardM1 } from "../cards";
import { ECOM_SECRET_API_KEY } from "../constants";

const address = new Address();
address.streetAddress1 = "3032920104 CORPORATE SQ";

const config1 = new PorticoConfig();
config1.secretApiKey = ECOM_SECRET_API_KEY;
config1.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configureService(config1);

cardM1
  .authorize(6.53)
  .withCurrency("USD")
  .withAddress(address)
  .withRequestMultiUseToken(true)
  .withAllowDuplicates(true)
  .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
  .execute()
  .then(async (response) => {
    console.log(response);
    const captureRes = await Transaction.fromId(response.transactionId)
      .capture(6.53)
      .withCurrency("USD")
      .execute();
    console.log(captureRes);
  })
  .catch((e) => {
    console.error(e);
  });

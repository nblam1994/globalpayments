import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
} from "globalpayments-api";
import { cardV1 } from "../cards";
import { ECOM_SECRET_API_KEY } from "../constants";


const address = new Address();
address.streetAddress1 = "3032920104 CORPORATE SQ";

const chargetConfigconfig = new PorticoConfig();
chargetConfigconfig.secretApiKey = ECOM_SECRET_API_KEY;
chargetConfigconfig.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configureService(chargetConfigconfig);

cardV1
  .verify()
  .withCurrency("USD")
  .withAddress(address)
  .withRequestMultiUseToken(true)
  .withAllowDuplicates(true)
  .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
  .execute()
  .then((response) => {
    console.log(response);
  })
  .catch((e) => {
    console.error(e);
  });

  const ampUpConfog = new PorticoConfig();
  chargetConfigconfig.secretApiKey = ECOM_SECRET_API_KEY;
  chargetConfigconfig.serviceUrl = "https://cert.api2.heartlandportico.com";
  ServicesContainer.configureService(chargetConfigconfig);

  cardV1
    .verify()
    .withCurrency("USD")
    .withAddress(address)
    .withRequestMultiUseToken(true)
    .withAllowDuplicates(true)
    .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
    .execute()
    .then((response) => {
      console.log(response);
    })
    .catch((e) => {
      console.error(e);
    });


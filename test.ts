import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
  CreditCardData,
} from "globalpayments-api";

const address = new Address();
address.streetAddress1 = "3032920104 CORPORATE SQ";

const config1 = new PorticoConfig();
config1.secretApiKey = "skapi_cert_MX3fBQCkK3MAjaXU5qNFsdT2wOKWjW58dW_8W7aMfg";
config1.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configureService(config1);

const cardV1 = new CreditCardData();
cardV1.token = "supt_4SJPNTopLX1UxxifiKPaCuXr";

cardV1
  .charge(1)
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

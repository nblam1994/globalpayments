import { CreditCardData } from "globalpayments-api";

const cardV1 = new CreditCardData();
cardV1.number = "4003000123456781";
cardV1.expMonth = "12";
cardV1.expYear = "2025";
cardV1.cvn = "123";

const cardV2 = new CreditCardData();
cardV2.number = "4003002345678903";
cardV2.expMonth = "12";
cardV2.expYear = "2025";
cardV2.cvn = "123";

const cardV3 = new CreditCardData();
cardV3.number = "4011190070070071";
cardV3.expMonth = "12";
cardV3.expYear = "2025";
cardV3.cvn = "123";

const cardM1 = new CreditCardData();
cardM1.number = "5499990123456781";
cardM1.expMonth = "12";
cardM1.expYear = "2025";
cardM1.cvn = "123";

const cardM2 = new CreditCardData();
cardM2.number = "5499992345678903";
cardM2.expMonth = "12";
cardM2.expYear = "2025";
cardM2.cvn = "123";

const cardFPV1 = new CreditCardData();
cardFPV1.number = "4761120010000492";
cardFPV1.expMonth = "12";
cardFPV1.expYear = "2025";
// cardFPV1.cvn = "738";
cardFPV1.cvn = "123";

const cardFPM1 = new CreditCardData();
cardFPM1.number = "5204245250460049";
cardFPM1.expMonth = "12";
cardFPM1.expYear = "2025";
cardFPM1.cvn = "123";

const cardFPAX1 = new CreditCardData();
cardFPAX1.number = "371737757042005";
cardFPAX1.expMonth = "12";
cardFPAX1.expYear = "2025";
cardFPAX1.cvn = "123";

const cardFPDI1 = new CreditCardData();
cardFPDI1.number = "6011000994462780";
cardFPDI1.expMonth = "12";
cardFPDI1.expYear = "2025";
cardFPDI1.cvn = "123";


export {
  cardV1,
  cardV2,
  cardM1,
  cardV3,
  cardM2,
  cardFPV1,
  cardFPM1,
  cardFPAX1,
  cardFPDI1,
};


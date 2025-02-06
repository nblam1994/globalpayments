import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
  Transaction,
} from "globalpayments-api";
import { cardFPV1 } from "../cards";
import { DIGITAL_WALLET_SECRET_API_KEY } from "../constants";

const address = new Address();
address.streetAddress1 = "303292010";

const config1 = new PorticoConfig();
config1.secretApiKey = DIGITAL_WALLET_SECRET_API_KEY;
config1.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configureService(config1);

cardFPV1
  .authorize(10.5)
  .withCurrency("USD")
  .withAddress(address)
  .withRequestMultiUseToken(true)
  .withAllowDuplicates(true)
  // .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
  .execute()
  .then(async (response) => {
    console.log(response);
    const res2 = await Transaction.fromId(response.transactionId)
      .capture(10.5)
      .withCurrency("USD")
      .execute();
     console.log(res2);
  })
  .catch((e) => {
    console.error(e);
  });


// Transaction {
//   authorizedAmount: '10.50',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '005033458501067',
//   commercialIndicator: undefined,
//   responseCode: '00',
//   responseMessage: 'APPROVAL',
//   transactionDescriptor: undefined,
//   referenceNumber: undefined,
//   recurringDataCode: undefined,
//   cvnResponseMessage: 'Match.',
//   cvnResponseCode: 'M',
//   cavvResponseCode: undefined,
//   multiCapture: undefined,
//   multiCapturePaymentCount: undefined,
//   multiCaptureSequence: undefined,
//   cardLast4: undefined,
//   cardType: 'Visa',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: 'VI1050',
//     orderId: undefined,
//     transactionId: '200078154527',
//     clientTransactionId: undefined,
//     alternativePaymentResponse: undefined,
//     paymentMethodType: 2
//   },
//   token: 'bGLYl51I56MZ44ZCW5Ei0492',
//   giftCard: undefined,
//   dccRateData: undefined,
//   clientTransactionId: undefined,
//   timestamp: undefined,
//   batchId: undefined,
//   batchSeqNbr: undefined,
//   payFacData: undefined,
//   payerDetails: undefined,
//   fingerprint: undefined,
//   fingerprintIndicator: undefined,
//   tokenUsageMode: undefined,
//   cardDetails: undefined,
//   threeDSecure: undefined,
//   accountNumberLast4: undefined,
//   accountType: undefined,
//   cardIssuerResponse: undefined
// }
// Transaction {
//   authorizedAmount: '10.50',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '005033458501067',
//   commercialIndicator: undefined,
//   responseCode: '00',
//   responseMessage: 'APPROVAL',
//   transactionDescriptor: undefined,
//   referenceNumber: undefined,
//   recurringDataCode: undefined,
//   cvnResponseMessage: 'Match.',
//   cvnResponseCode: 'M',
//   cavvResponseCode: undefined,
//   multiCapture: undefined,
//   multiCapturePaymentCount: undefined,
//   multiCaptureSequence: undefined,
//   cardLast4: undefined,
//   cardType: 'Visa',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: 'VI1050',
//     orderId: undefined,
//     transactionId: '200078153470',
//     clientTransactionId: undefined,
//     alternativePaymentResponse: undefined,
//     paymentMethodType: 2
//   },
//   token: undefined,
//   giftCard: undefined,
//   dccRateData: undefined,
//   clientTransactionId: undefined,
//   timestamp: undefined,
//   batchId: '1044446',
//   batchSeqNbr: '1',
//   payFacData: undefined,
//   payerDetails: undefined,
//   fingerprint: undefined,
//   fingerprintIndicator: undefined,
//   tokenUsageMode: undefined,
//   cardDetails: undefined,
//   threeDSecure: undefined,
//   accountNumberLast4: undefined,
//   accountType: undefined,
//   cardIssuerResponse: undefined
// }
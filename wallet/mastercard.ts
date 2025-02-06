import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
  Transaction,
} from "globalpayments-api";
import { cardFPM1 } from "../cards";
import { DIGITAL_WALLET_SECRET_API_KEY } from "../constants";

const address = new Address();
address.streetAddress1 = "303292010";

const config1 = new PorticoConfig();
config1.secretApiKey = DIGITAL_WALLET_SECRET_API_KEY;
config1.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configureService(config1);

cardFPM1
  .authorize(25.99)
  .withCurrency("USD")
  .withAddress(address)
  .withAllowDuplicates(true)
  .withMultiCapture(true)
  // .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
  .execute()
  .then(async (response) => {
    console.log(response);
    const res2 = await Transaction.fromId(response.transactionId)
      .capture(25.99)
      .withCurrency("USD")
      .execute();
    console.log(res2);
  })
  .catch((e) => {
    console.error(e);
  });

// Transaction {
//   authorizedAmount: '25.99',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: 'MCC3416100203',
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
//   cardType: 'MC',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: 'MC2599',
//     orderId: undefined,
//     transactionId: '200078153469',
//     clientTransactionId: undefined,
//     alternativePaymentResponse: undefined,
//     paymentMethodType: 2
//   },
//   token: undefined,
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
//   authorizedAmount: '25.99',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: 'MCC3416100203',
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
//   cardType: 'MC',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: 'MC2599',
//     orderId: undefined,
//     transactionId: '200078156301',
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
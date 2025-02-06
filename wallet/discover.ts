import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
  Transaction,
  TransactionModifier,
} from "globalpayments-api";
import { cardFPDI1 } from "../cards";
import { DIGITAL_WALLET_SECRET_API_KEY } from "../constants";

const address = new Address();
address.streetAddress1 = "303292010";

const config1 = new PorticoConfig();
config1.secretApiKey = DIGITAL_WALLET_SECRET_API_KEY;
config1.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configureService(config1);

cardFPDI1
  .authorize(35)
  .withCurrency("USD")
  .withAddress(address)
  .withRequestMultiUseToken(true)
  .withAllowDuplicates(true)
  // .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
  .execute()
  .then(async (response) => {
    console.log(response);
    const res = await Transaction.fromId(response.transactionId)
      .additionalAuth(40)
      .withModifier(TransactionModifier.Incremental)
      .withCurrency("USD")
      .execute();
     console.log(res);

    const captureRes = await Transaction.fromId(response.transactionId)
      .capture(40)
      .withCurrency("USD")
      .execute();
    console.log(captureRes);

  })
  .catch((e) => {
    console.error(e);
  });


// Transaction {
//   authorizedAmount: '35.00',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '055503343428740',
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
//   cardType: 'Disc',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: 'DI3500',
//     orderId: undefined,
//     transactionId: '200078156298',
//     clientTransactionId: undefined,
//     alternativePaymentResponse: undefined,
//     paymentMethodType: 2
//   },
//   token: '8Hi2em16dM23FecPYEsy2780',
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
//   authorizedAmount: '40.00',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '055503344428740',
//   commercialIndicator: undefined,
//   responseCode: '00',
//   responseMessage: 'APPROVAL',
//   transactionDescriptor: undefined,
//   referenceNumber: undefined,
//   recurringDataCode: undefined,
//   cvnResponseMessage: undefined,
//   cvnResponseCode: undefined,
//   cavvResponseCode: undefined,
//   multiCapture: undefined,
//   multiCapturePaymentCount: undefined,
//   multiCaptureSequence: undefined,
//   cardLast4: undefined,
//   cardType: 'Disc',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: 'DI4000',
//     orderId: undefined,
//     transactionId: '200078156299',
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
//   authorizedAmount: '40.00',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '055503343428740',
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
//   cardType: 'Disc',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: 'DI3500',
//     orderId: undefined,
//     transactionId: '200078157098',
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
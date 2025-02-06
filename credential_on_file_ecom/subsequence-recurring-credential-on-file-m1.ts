import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
  Transaction,
  CreditCardData,
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
  .verify()
  .withCurrency("USD")
  .withAddress(address)
  .withRequestMultiUseToken(true)
  .withAllowDuplicates(true)
  .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
  .execute()
  .then(async (response) => {
    console.log(response);
    const card = new CreditCardData();
    card.token = response.token;

    const response2 = await card
      .authorize(7.53)
      .withCurrency("USD")
      .withAddress(address)
      .withAllowDuplicates(true)
      .withCardBrandStorage(
        StoredCredentialInitiator.Merchant,
        response.cardBrandTransactionId
      )
      .execute();

    console.log(response2);
    const captureRes = await Transaction.fromId(response2.transactionId)
      .capture(7.53)
      .withCurrency("USD")
      .execute();
    console.log(captureRes);
  })
  .catch((e) => {
    console.error(e);
  });

//   Transaction {
//   authorizedAmount: '0.00',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '6080366050104',
//   commercialIndicator: undefined,
//   responseCode: '00',
//   responseMessage: 'APPROVAL',
//   transactionDescriptor: undefined,
//   referenceNumber: undefined,
//   recurringDataCode: undefined,
//   cvnResponseMessage: 'Issuer not certified.',
//   cvnResponseCode: 'U',
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
//     authCode: '051828',
//     orderId: undefined,
//     transactionId: '200077532894',
//     clientTransactionId: undefined,
//     alternativePaymentResponse: undefined,
//     paymentMethodType: 2
//   },
//   token: 'Y09Os21XEcK10B54mSUb6781',
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
//   authorizedAmount: '7.53',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '6090366060104',
//   commercialIndicator: undefined,
//   responseCode: '00',
//   responseMessage: 'APPROVAL',
//   transactionDescriptor: undefined,
//   referenceNumber: undefined,
//   recurringDataCode: undefined,
//   cvnResponseMessage: 'Issuer not certified.',
//   cvnResponseCode: 'U',
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
//     authCode: '639267',
//     orderId: undefined,
//     transactionId: '200077535702',
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
//   authorizedAmount: '7.53',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '6100366070104',
//   commercialIndicator: undefined,
//   responseCode: '00',
//   responseMessage: 'APPROVAL',
//   transactionDescriptor: undefined,
//   referenceNumber: undefined,
//   recurringDataCode: undefined,
//   cvnResponseMessage: 'Issuer not certified.',
//   cvnResponseCode: 'U',
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
//     authCode: '639267',
//     orderId: undefined,
//     transactionId: '200077533767',
//     clientTransactionId: undefined,
//     alternativePaymentResponse: undefined,
//     paymentMethodType: 2
//   },
//   token: undefined,
//   giftCard: undefined,
//   dccRateData: undefined,
//   clientTransactionId: undefined,
//   timestamp: undefined,
//   batchId: '1044493',
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

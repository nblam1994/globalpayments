// Wrong test ?

import {
  ServicesContainer,
  PorticoConfig,
  Address,
  StoredCredentialInitiator,
  Transaction,
  CreditCardData,
} from "globalpayments-api";
import { cardV2 } from "../cards";
import { ECOM_SECRET_API_KEY } from "../constants";

const address = new Address();
address.streetAddress1 = "303292010";

const config1 = new PorticoConfig();
config1.secretApiKey = ECOM_SECRET_API_KEY;
config1.serviceUrl = "https://cert.api2.heartlandportico.com";
ServicesContainer.configureService(config1);

cardV2
  .authorize(8.71)
  .withCurrency("USD")
  .withAddress(address)
  .withRequestMultiUseToken(true)
  .withAllowDuplicates(true)
  .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
  .execute()
  .then(async (response) => {
    console.log(response);

    const resCapture = await Transaction.fromId(response.transactionId)
      .capture(8.71)
      .withCurrency("USD")
      .execute();
    console.log(resCapture);

    const card = new CreditCardData();
    card.token = response.token;

    const resReservsal = card.reverse(1).withCardBrandStorage(
      StoredCredentialInitiator.CardHolder,
      response.cardBrandTransactionId
    )
    console.log(resReservsal);
  })
  .catch((e) => {
    console.error(e);
  });

//   ransaction {
//   authorizedAmount: '8.71',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '755006224406638',
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
//   cardType: 'Visa',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: '705369',
//     orderId: undefined,
//     transactionId: '200077550117',
//     clientTransactionId: undefined,
//     alternativePaymentResponse: undefined,
//     paymentMethodType: 2
//   },
//   token: 'c4EVdo10ucV5GV8b4wXR8903',
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
//   authorizedAmount: '8.71',
//   avsAddressResponse: undefined,
//   balanceAmount: undefined,
//   pointsBalanceAmount: undefined,
//   cardBrandTransactionId: '755006224416639',
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
//   cardType: 'Visa',
//   avsResponseMessage: 'AVS Not Requested.',
//   avsResponseCode: '0',
//   availableBalance: undefined,
//   transactionReference: TransactionReference {
//     authCode: '705369',
//     orderId: undefined,
//     transactionId: '200077551100',
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
// AuthorizationBuilder {
//   validations: Validations {
//     rules: { transactionType: [Object], paymentMethodType: [Object] }
//   },
//   paymentMethod: CreditCardData {
//     paymentMethodType: 2,
//     encryptionData: undefined,
//     token: 'c4EVdo10ucV5GV8b4wXR8903',
//     mobileType: undefined,
//     paymentSource: undefined,
//     cryptogram: undefined,
//     eci: undefined,
//     threeDSecure: undefined,
//     number: undefined,
//     expMonth: undefined,
//     expYear: undefined,
//     cvn: undefined,
//     cvnPresenceIndicator: 4,
//     cardHolderName: undefined,
//     cardPresent: false,
//     readerPresent: false
//   },
//   transactionType: 32,
//   transactionModifier: 1,
//   supplementaryData: {},
//   alias: undefined,
//   aliasAction: undefined,
//   allowDuplicates: undefined,
//   allowPartialAuth: undefined,
//   amount: 1,
//   authAmount: undefined,
//   amountEstimated: undefined,
//   balanceInquiryType: undefined,
//   billingAddress: undefined,
//   cardBrandTransactionId: '755006224406638',
//   cashBackAmount: undefined,
//   clientTransactionId: undefined,
//   currency: undefined,
//   customerData: undefined,
//   customerId: undefined,
//   customerIpAddress: undefined,
//   cvn: undefined,
//   description: undefined,
//   dynamicDescriptor: undefined,
//   ecommerceInfo: undefined,
//   gratuity: undefined,
//   convenienceAmt: undefined,
//   shippingAmt: undefined,
//   hostedPaymentData: undefined,
//   invoiceNumber: undefined,
//   level2Request: undefined,
//   offlineAuthCode: undefined,
//   oneTimePayment: undefined,
//   orderId: undefined,
//   paymentMethodUsageMode: undefined,
//   homePhone: undefined,
//   workPhone: undefined,
//   shippingPhone: undefined,
//   shippingAmount: undefined,
//   orderDetails: undefined,
//   productId: undefined,
//   recurringSequence: undefined,
//   recurringType: undefined,
//   requestMultiUseToken: undefined,
//   requestUniqueToken: undefined,
//   replacementCard: undefined,
//   scheduleId: undefined,
//   shippingAddress: undefined,
//   timestamp: undefined,
//   dccRateData: undefined,
//   transactionInitiator: 'C',
//   idempotencyKey: undefined,
//   emvChipCondition: undefined,
//   storedCredential: undefined,
//   productData: undefined,
//   merchantCategory: undefined
// }

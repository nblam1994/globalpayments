// import {
//   ServicesContainer,
//   PorticoConfig,
//   Address,
//   Transaction,
//   StoredCredentialInitiator,
//   CreditCardData,
//   ReportingService,
// } from "globalpayments-api";
// import { cardM1, cardV1, cardV2, cardV3 } from "./cards";

// const ECOM_SECRET_API_KEY =
//   "skapi_cert_MfH1BQDtKQAAWjLOg6M6j6YdvG4ngovj8asID-ykKQ";
// const MOTO_SECRET_API_KEY =
//   "skapi_cert_MfH1BQABKgAANsUFarogIaIQycfuek_6vsKF81ZyOw";
// const DIGITAL_WALLET_SECRET_API_KEY =
//   "skapi_cert_MfH1BQACKgAAF9WbWsB_ef31BgJbav6IoLWmAqrAxg";



// // const address = new Address()
// // address.streetAddress1 = "3032920104 CORPORATE SQ";

// const config1 = new PorticoConfig();
// config1.secretApiKey = "skapi_cert_MX3fBQCkK3MAjaXU5qNFsdT2wOKWjW58dW_8W7aMfg";
// config1.serviceUrl = "https://cert.api2.heartlandportico.com";
// ServicesContainer.configureService(config1);

// const card = new CreditCardData()
// card.number = "4003000123456718";
// card.expMonth = "12";
// card.expYear = "2025";
// card.cvn = "123";


// // TransactionSummary {
// //   amount: '0.00',
// //   currency: undefined,
// //   merchantId: undefined,
// //   merchantHierarchy: undefined,
// //   merchantName: undefined,
// //   merchantDbaName: undefined,
// //   accountDataSource: '@',
// //   accountNumberLast4: undefined,
// //   accountType: undefined,
// //   alternativePaymentResponse: undefined,
// //   aquirerReferenceNumber: undefined,
// //   authCode: '',
// //   authorizedAmount: '0.00',
// //   batchCloseDate: Invalid Date,
// //   batchSequenceNumber: undefined,
// //   brandReference: undefined,
// //   cardHolderName: undefined,
// //   cardSwiped: 'N',
// //   cardType: 'Visa',
// //   channel: undefined,
// //   clerkId: undefined,
// //   clientTransactionId: undefined,
// //   convenienceAmt: undefined,
// //   country: undefined,
// //   deviceId: '7547812',
// //   depositStatus: undefined,
// //   depositReference: undefined,
// //   depositTimeCreated: undefined,
// //   entryMode: undefined,
// //   issuerResponseCode: undefined,
// //   issuerResponseMessage: undefined,
// //   issuerTransactionId: '434116291777000',
// //   gatewayResponseCode: '00',
// //   gatewayResponseMessage: 'Success',
// //   gratuityAmount: '0',
// //   maskedCardNumber: '400300******6718',
// //   originalTransactionId: '0',
// //   orderId: undefined,
// //   paymentType: undefined,
// //   poNumber: undefined,
// //   referenceNumber: '434116291777',
// //   responseDate: 2024-12-07T08:57:02.397Z,
// //   serviceName: 'CreditAccountVerify',
// //   settlementAmount: '0',
// //   shippingAmt: undefined,
// //   siteTrace: '',
// //   status: 'I',
// //   taxAmount: undefined,
// //   taxType: undefined,
// //   transactionDate: Invalid Date,
// //   transactionLocalDate: undefined,
// //   transactionId: '200076994524',
// //   transactionStatus: undefined,
// //   transactionType: undefined,
// //   username: '777704144290SK',
// //   description: undefined,
// //   invoiceNumber: undefined,
// //   customerId: undefined,
// //   uniqueDeviceId: '',
// //   transactionDescriptor: undefined,
// //   giftCurrency: undefined,
// //   maskedAlias: undefined,
// //   paymentMethodKey: undefined,
// //   scheduleId: undefined,
// //   oneTimePayment: undefined,
// //   recurringDataCode: undefined,
// //   surchargeAmount: undefined,
// //   fraudRuleInfo: undefined,
// //   repeatCount: undefined,
// //   emvChipCondition: '',
// //   hasEmvTags: undefined,
// //   hasEcomPaymentData: undefined,
// //   hasLevelIII: undefined,
// //   cavvResponseCode: '',
// //   tokenPanLastFour: '',
// //   companyName: '',
// //   customerFirstName: '',
// //   customerLastName: '',
// //   debtRepaymentIndicator: undefined,
// //   captureAmount: undefined,
// //   fullyCaptured: undefined,
// //   fingerprint: undefined,
// //   fingerprintIndicator: undefined
// // }

// // card
// //   .verify()
// //   .withCurrency("USD")
// //   .withAllowDuplicates(true)
// //   .withRequestMultiUseToken(true)
// //   .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
// //   .execute()
// //   .then(async (response) => {
// //     console.log(response);
// //     const reportingRes = await ReportingService.transactionDetail(
// //       response.transactionId
// //     ).execute()

// //      console.log(reportingRes);

// //   });

// // card
// //   .capt()
// //   .withCurrency("USD")
// //   .withAllowDuplicates(true)
// //   .withRequestMultiUseToken(true)
// //   .withCardBrandStorage(StoredCredentialInitiator.Merchant)
// //   .execute()
// //   .then((response) => {
// //     console.log(response);

// //     cardV3
// //       .authorize(10.87)
// //       .withCurrency("USD")
// //       .withAllowDuplicates(true)
// //       .withAddress(address)
// //       .withCardBrandStorage(StoredCredentialInitiator.Merchant)
// //       .withTransactionId(response.cardBrandTransactionId)
// //       .execute()
// //       .then(async (response) => {
// //         console.log(response);
// //         await Transaction.fromId(response.cardBrandTransactionId)
// //           .capture(10.87)
// //           .execute();
// //       });
// //   });

// // cardV1
// // cardV2
// // cardV3
// //   // cardM1
// //   // .verify()
// //   .authorize(10.87)
// //   // .charge(10)
// //   .withCurrency("USD")
// //   .withAddress(address)
// //   .withRequestMultiUseToken(true)
// //   .withAllowDuplicates(true)
// //   .withCardBrandStorage(StoredCredentialInitiator.CardHolder)
// //   .execute()
// //   .then(async (response) => {
// //     console.log(response);
// //     await Transaction.fromId(response.transactionId).capture(10.87).execute();
// //   })
// //   .catch((e) => {
// //     console.error(e);
// //   });

import { fromZonedTime } from 'date-fns-tz';


export function getDateWithTimeAndTimezone(
  timeStr: string,
  timezone: string
): Date {
  // Get today's date in the specified timezone
  const now = new Date();
  const today = new Intl.DateTimeFormat("en-US", {
    timeZone: timezone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(now);

  // Format the date as YYYY-MM-DD
  const [month, day, year] = today.split("/");
  const dateStr = `${year}-${month}-${day}T${timeStr}`;
  // Create the Date object with the timezone offset
  const date = new Date(`${dateStr}`);
  const zoneDate = fromZonedTime(date, timezone);

  // Validate the parsed date
  if (isNaN(date.getTime())) {
    throw new Error("Invalid time or timezone format");
  }

  return zoneDate;
}

console.log(getDateWithTimeAndTimezone("09:00:00", "Asia/Bangkok"));


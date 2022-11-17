/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, Accounts, and Crypto Payments APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Sum of the the amount paid.
 * @export
 * @interface PaymentIntentAmountPaid
 */
export interface PaymentIntentAmountPaid {
  /**
   * Magnitude of the amount, in units of the currency, with a `.`.
   * @type {string}
   * @memberof PaymentIntentAmountPaid
   */
  amount: string;
  /**
   * Currency code.
   * @type {string}
   * @memberof PaymentIntentAmountPaid
   */
  currency: PaymentIntentAmountPaidCurrencyEnum;
}

export const PaymentIntentAmountPaidCurrencyEnum = {
  Usd: "USD"
} as const;

export type PaymentIntentAmountPaidCurrencyEnum =
  typeof PaymentIntentAmountPaidCurrencyEnum[keyof typeof PaymentIntentAmountPaidCurrencyEnum];

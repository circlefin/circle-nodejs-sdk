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
 *
 * @export
 * @interface FiatMoneyUsd
 */
export interface FiatMoneyUsd {
  /**
   * Magnitude of the amount, in units of the currency, with a `.`.
   * @type {string}
   * @memberof FiatMoneyUsd
   */
  amount: string;
  /**
   * Currency code.
   * @type {string}
   * @memberof FiatMoneyUsd
   */
  currency: FiatMoneyUsdCurrencyEnum;
}

export const FiatMoneyUsdCurrencyEnum = {
  Usd: "USD"
} as const;

export type FiatMoneyUsdCurrencyEnum =
  typeof FiatMoneyUsdCurrencyEnum[keyof typeof FiatMoneyUsdCurrencyEnum];

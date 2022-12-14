/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface PayoutMoney
 */
export interface PayoutMoney {
  /**
   * Magnitude of the amount, in units of the currency, with a `.`.
   * @type {string}
   * @memberof PayoutMoney
   */
  amount: string;
  /**
   * Currency code for the amount.
   * @type {string}
   * @memberof PayoutMoney
   */
  currency: PayoutMoneyCurrencyEnum;
}

export const PayoutMoneyCurrencyEnum = {
  Usd: "USD",
  Eur: "EUR",
  Btc: "BTC",
  Eth: "ETH",
  Mtc: "MTC",
  Flw: "FLW",
  Man: "MAN"
} as const;

export type PayoutMoneyCurrencyEnum =
  typeof PayoutMoneyCurrencyEnum[keyof typeof PayoutMoneyCurrencyEnum];

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
 * @interface FiatMoney
 */
export interface FiatMoney {
  /**
   * Magnitude of the amount, in units of the currency, with a `.`.
   * @type {string}
   * @memberof FiatMoney
   */
  amount: string;
  /**
   * Currency code.
   * @type {string}
   * @memberof FiatMoney
   */
  currency: FiatMoneyCurrencyEnum;
}

export const FiatMoneyCurrencyEnum = {
  Usd: "USD",
  Eur: "EUR"
} as const;

export type FiatMoneyCurrencyEnum =
  typeof FiatMoneyCurrencyEnum[keyof typeof FiatMoneyCurrencyEnum];

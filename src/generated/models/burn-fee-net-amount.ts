/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { FiatCurrency } from "./fiat-currency";

/**
 *
 * @export
 * @interface BurnFeeNetAmount
 */
export interface BurnFeeNetAmount {
  /**
   * Sum of all initiated payouts minus sum of all received push payments, in units of the currency, with a `.`.
   * @type {string}
   * @memberof BurnFeeNetAmount
   */
  amount: string;
  /**
   *
   * @type {FiatCurrency}
   * @memberof BurnFeeNetAmount
   */
  currency: FiatCurrency;
}
/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";

/**
 * Final adjustment which increases (credits) or decreases (debits) the total returned amount to the source wallet.
 * @export
 * @interface FinalAdjustments
 */
export interface FinalAdjustments {
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FinalAdjustments
   */
  fxCredit?: FiatMoneyUsd;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof FinalAdjustments
   */
  fxDebit?: FiatMoneyUsd;
}

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
 *
 * @export
 * @interface MockSepaPaymentRequest
 */
export interface MockSepaPaymentRequest {
  /**
   * SEPA tracking reference that needs to be set in the payment details or description.
   * @type {string}
   * @memberof MockSepaPaymentRequest
   */
  trackingRef: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof MockSepaPaymentRequest
   */
  amount: FiatMoneyUsd;
}

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

// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";
// May contain unused imports in some cases
// @ts-ignore
import { MockAchAccount } from "./mock-ach-account";

/**
 *
 * @export
 * @interface MockAchAccountResponse
 */
export interface MockAchAccountResponse {
  /**
   * The processor token needs to be provided when linking an ACH account against this mock.
   * @type {string}
   * @memberof MockAchAccountResponse
   */
  processorToken?: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof MockAchAccountResponse
   */
  balance?: FiatMoneyUsd;
  /**
   *
   * @type {MockAchAccount}
   * @memberof MockAchAccountResponse
   */
  account?: MockAchAccount;
}

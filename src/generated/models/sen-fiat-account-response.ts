/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ExternalFiatAccountStatus } from "./external-fiat-account-status";

/**
 *
 * @export
 * @interface SenFiatAccountResponse
 */
export interface SenFiatAccountResponse {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof SenFiatAccountResponse
   */
  id: string;
  /**
   *
   * @type {ExternalFiatAccountStatus}
   * @memberof SenFiatAccountResponse
   */
  status: ExternalFiatAccountStatus;
  /**
   * Bank name plus last four digits of the bank account number.
   * @type {string}
   * @memberof SenFiatAccountResponse
   */
  description: string;
  /**
   * Circle tracking reference that needs to be set in the memo field..
   * @type {string}
   * @memberof SenFiatAccountResponse
   */
  trackingRef: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof SenFiatAccountResponse
   */
  createDate: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof SenFiatAccountResponse
   */
  updateDate: string;
  /**
   * Currency of the fiat account.
   * @type {string}
   * @memberof SenFiatAccountResponse
   */
  currency?: string;
}

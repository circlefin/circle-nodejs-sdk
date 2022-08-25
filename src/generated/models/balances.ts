/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { Money } from "./money";

/**
 * Available and unsettled balances of the merchant.
 * @export
 * @interface Balances
 */
export interface Balances {
  /**
   * List of currency balances (one for each currency) that are currently available to spend.
   * @type {Array<Money>}
   * @memberof Balances
   */
  available: Array<Money>;
  /**
   * List of currency balances (one for each currency) that have been captured but are currently in the process of settling and will become available to spend at some point in the future.
   * @type {Array<Money>}
   * @memberof Balances
   */
  unsettled: Array<Money>;
}

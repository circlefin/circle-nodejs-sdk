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
import { FiatPayoutDestinationType } from "./fiat-payout-destination-type";

/**
 * The destination.
 * @export
 * @interface FiatPayoutCreationRequestDestination
 */
export interface FiatPayoutCreationRequestDestination {
  /**
   *
   * @type {FiatPayoutDestinationType}
   * @memberof FiatPayoutCreationRequestDestination
   */
  type: FiatPayoutDestinationType;
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof FiatPayoutCreationRequestDestination
   */
  id: string;
}

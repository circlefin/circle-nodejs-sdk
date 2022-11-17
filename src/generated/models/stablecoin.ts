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
import { TokenAmount } from "./token-amount";

/**
 *
 * @export
 * @interface Stablecoin
 */
export interface Stablecoin {
  /**
   * Name of the stablecoin.
   * @type {string}
   * @memberof Stablecoin
   */
  name?: string;
  /**
   * Symbol of the stablecoin.
   * @type {string}
   * @memberof Stablecoin
   */
  symbol?: string;
  /**
   * Total circulating amount of the stablecoin.
   * @type {string}
   * @memberof Stablecoin
   */
  totalAmount?: string;
  /**
   * A list of the broken down totalAmount by chain of the stablecoin.
   * @type {Array<TokenAmount>}
   * @memberof Stablecoin
   */
  chains?: Array<TokenAmount>;
}

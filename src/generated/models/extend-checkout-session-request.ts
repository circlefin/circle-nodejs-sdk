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
 * @interface ExtendCheckoutSessionRequest
 */
export interface ExtendCheckoutSessionRequest {
  /**
   * Extend the CheckoutSession by extendTime seconds if it is active or expired. The field is optional, if not provided, extend a period that configured by Merchant (default 1 day)
   * @type {number}
   * @memberof ExtendCheckoutSessionRequest
   */
  extendTime?: number;
}
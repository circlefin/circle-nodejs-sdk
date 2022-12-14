/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { SubscriptionDetail } from "./subscription-detail";

/**
 *
 * @export
 * @interface SubscriptionResponse
 */
export interface SubscriptionResponse {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof SubscriptionResponse
   */
  id?: string;
  /**
   * URL of the endpoint.
   * @type {string}
   * @memberof SubscriptionResponse
   */
  endpoint?: string;
  /**
   * List of subscriptions details for created subscriptions.
   * @type {Array<SubscriptionDetail>}
   * @memberof SubscriptionResponse
   */
  subscriptionDetails?: Array<SubscriptionDetail>;
}

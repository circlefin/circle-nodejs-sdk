/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ExchangeRateRequestFrom } from "./exchange-rate-request-from";
// May contain unused imports in some cases
// @ts-ignore
import { ExchangeRateRequestTo } from "./exchange-rate-request-to";

/**
 *
 * @export
 * @interface ExchangeRateRequest
 */
export interface ExchangeRateRequest {
  /**
   *
   * @type {ExchangeRateRequestFrom}
   * @memberof ExchangeRateRequest
   */
  from: ExchangeRateRequestFrom;
  /**
   *
   * @type {ExchangeRateRequestTo}
   * @memberof ExchangeRateRequest
   */
  to: ExchangeRateRequestTo;
}

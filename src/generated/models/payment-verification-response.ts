/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CvvResults } from "./cvv-results";
// May contain unused imports in some cases
// @ts-ignore
import { Eci } from "./eci";
// May contain unused imports in some cases
// @ts-ignore
import { ThreeDsResult } from "./three-ds-result";

/**
 * Indicates the status of the payment verification. This property will be present once the payment is confirmed.
 * @export
 * @interface PaymentVerificationResponse
 */
export interface PaymentVerificationResponse {
  /**
   * Status of the AVS check. Raw AVS response, expressed as an upper-case letter. `not_requested` indicates check was not made. `pending` is pending/processing.
   * @type {string}
   * @memberof PaymentVerificationResponse
   */
  avs: string;
  /**
   *
   * @type {CvvResults}
   * @memberof PaymentVerificationResponse
   */
  cvv: CvvResults;
  /**
   *
   * @type {ThreeDsResult}
   * @memberof PaymentVerificationResponse
   */
  threeDSecure?: ThreeDsResult;
  /**
   *
   * @type {Eci}
   * @memberof PaymentVerificationResponse
   */
  eci?: Eci;
}

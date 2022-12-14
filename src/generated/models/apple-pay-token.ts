/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ApplePayTokenHeader } from "./apple-pay-token-header";

/**
 *
 * @export
 * @interface ApplePayToken
 */
export interface ApplePayToken {
  /**
   * ApplePay token version information.
   * @type {string}
   * @memberof ApplePayToken
   */
  version: ApplePayTokenVersionEnum;
  /**
   * Encrypted payment data. Base64 encoded as a string.
   * @type {string}
   * @memberof ApplePayToken
   */
  data: string;
  /**
   * Signature of the payment and header data. The signature includes the signing certificate, its intermediate CA certificate, and information about the signing algorithm.
   * @type {string}
   * @memberof ApplePayToken
   */
  signature: string;
  /**
   *
   * @type {ApplePayTokenHeader}
   * @memberof ApplePayToken
   */
  header: ApplePayTokenHeader;
}

export const ApplePayTokenVersionEnum = {
  EcV1: "EC_v1",
  RsaV1: "RSA_v1"
} as const;

export type ApplePayTokenVersionEnum =
  typeof ApplePayTokenVersionEnum[keyof typeof ApplePayTokenVersionEnum];

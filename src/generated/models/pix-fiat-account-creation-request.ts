/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { PixAccountType } from "./pix-account-type";

/**
 *
 * @export
 * @interface PixFiatAccountCreationRequest
 */
export interface PixFiatAccountCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof PixFiatAccountCreationRequest
   */
  idempotencyKey: string;
  /**
   * Name of the beneficiary.
   * @type {string}
   * @memberof PixFiatAccountCreationRequest
   */
  name: string;
  /**
   * Beneficiary account number.
   * @type {string}
   * @memberof PixFiatAccountCreationRequest
   */
  accountNumber: string;
  /**
   * Beneficiary ISPB.
   * @type {string}
   * @memberof PixFiatAccountCreationRequest
   */
  ispb: string;
  /**
   * Beneficiary account branch code.
   * @type {string}
   * @memberof PixFiatAccountCreationRequest
   */
  branchCode: string;
  /**
   * Beneficiary Tax ID.
   * @type {string}
   * @memberof PixFiatAccountCreationRequest
   */
  taxId: string;
  /**
   *
   * @type {PixAccountType}
   * @memberof PixFiatAccountCreationRequest
   */
  accountType: PixAccountType;
}

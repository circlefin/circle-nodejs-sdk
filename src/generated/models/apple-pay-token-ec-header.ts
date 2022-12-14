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
 * @interface ApplePayTokenEcHeader
 */
export interface ApplePayTokenEcHeader {
  /**
   * Optional. Hash of the applicationData property of the original PKPaymentRequest object. If the value of that property is null, this key is omitted.
   * @type {string}
   * @memberof ApplePayTokenEcHeader
   */
  applicationData?: string;
  /**
   * Ephemeral public key bytes.
   * @type {string}
   * @memberof ApplePayTokenEcHeader
   */
  ephemeralPublicKey: string;
  /**
   * Hash of the X.509 encoded public key bytes of the merchant’s certificate.
   * @type {string}
   * @memberof ApplePayTokenEcHeader
   */
  publicKeyHash: string;
  /**
   * Transaction identifier, generated on the device.
   * @type {string}
   * @memberof ApplePayTokenEcHeader
   */
  transactionId: string;
}

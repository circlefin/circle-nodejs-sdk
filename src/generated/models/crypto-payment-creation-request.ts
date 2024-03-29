/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CryptoPaymentDestination } from "./crypto-payment-destination";
// May contain unused imports in some cases
// @ts-ignore
import { CryptoPaymentSource } from "./crypto-payment-source";
// May contain unused imports in some cases
// @ts-ignore
import { CryptoPaymentsMoney } from "./crypto-payments-money";
// May contain unused imports in some cases
// @ts-ignore
import { MetadataCryptoPayment } from "./metadata-crypto-payment";

/**
 *
 * @export
 * @interface CryptoPaymentCreationRequest
 */
export interface CryptoPaymentCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof CryptoPaymentCreationRequest
   */
  idempotencyKey: string;
  /**
   * Payment intent uuid which is generated by the create payment intent call
   * @type {string}
   * @memberof CryptoPaymentCreationRequest
   */
  paymentIntentId: string;
  /**
   *
   * @type {MetadataCryptoPayment}
   * @memberof CryptoPaymentCreationRequest
   */
  protocolMetadata: MetadataCryptoPayment;
  /**
   *
   * @type {CryptoPaymentsMoney}
   * @memberof CryptoPaymentCreationRequest
   */
  amount: CryptoPaymentsMoney;
  /**
   *
   * @type {CryptoPaymentSource}
   * @memberof CryptoPaymentCreationRequest
   */
  source: CryptoPaymentSource;
  /**
   *
   * @type {CryptoPaymentDestination}
   * @memberof CryptoPaymentCreationRequest
   */
  destination: CryptoPaymentDestination;
  /**
   * Network fee quote uuid which is returned from the /presign response. Only required when end user pays for gas fee
   * @type {string}
   * @memberof CryptoPaymentCreationRequest
   */
  quoteId?: string;
}

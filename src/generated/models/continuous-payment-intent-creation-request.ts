/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodBlockchain } from "./payment-method-blockchain";

/**
 *
 * @export
 * @interface ContinuousPaymentIntentCreationRequest
 */
export interface ContinuousPaymentIntentCreationRequest {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof ContinuousPaymentIntentCreationRequest
   */
  idempotencyKey: string;
  /**
   * Desired currency for the payment
   * @type {string}
   * @memberof ContinuousPaymentIntentCreationRequest
   */
  currency: ContinuousPaymentIntentCreationRequestCurrencyEnum;
  /**
   * Desired currency for the payments to settle in.
   * @type {string}
   * @memberof ContinuousPaymentIntentCreationRequest
   */
  settlementCurrency: ContinuousPaymentIntentCreationRequestSettlementCurrencyEnum;
  /**
   *
   * @type {Array<PaymentMethodBlockchain>}
   * @memberof ContinuousPaymentIntentCreationRequest
   */
  paymentMethods: Array<PaymentMethodBlockchain>;
  /**
   *
   * @type {string}
   * @memberof ContinuousPaymentIntentCreationRequest
   */
  type?: ContinuousPaymentIntentCreationRequestTypeEnum;
}

export const ContinuousPaymentIntentCreationRequestCurrencyEnum = {
  Usd: "USD",
  Btc: "BTC",
  Eth: "ETH"
} as const;

export type ContinuousPaymentIntentCreationRequestCurrencyEnum =
  typeof ContinuousPaymentIntentCreationRequestCurrencyEnum[keyof typeof ContinuousPaymentIntentCreationRequestCurrencyEnum];
export const ContinuousPaymentIntentCreationRequestSettlementCurrencyEnum = {
  Usd: "USD",
  Btc: "BTC",
  Eth: "ETH"
} as const;

export type ContinuousPaymentIntentCreationRequestSettlementCurrencyEnum =
  typeof ContinuousPaymentIntentCreationRequestSettlementCurrencyEnum[keyof typeof ContinuousPaymentIntentCreationRequestSettlementCurrencyEnum];
export const ContinuousPaymentIntentCreationRequestTypeEnum = {
  Continuous: "continuous"
} as const;

export type ContinuousPaymentIntentCreationRequestTypeEnum =
  typeof ContinuousPaymentIntentCreationRequestTypeEnum[keyof typeof ContinuousPaymentIntentCreationRequestTypeEnum];

/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CryptoPaymentsMoney } from "./crypto-payments-money";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentIntentFees } from "./payment-intent-fees";
// May contain unused imports in some cases
// @ts-ignore
import { PaymentMethodBlockchain } from "./payment-method-blockchain";
// May contain unused imports in some cases
// @ts-ignore
import { Timeline } from "./timeline";

/**
 *
 * @export
 * @interface ContinuousPaymentIntent
 */
export interface ContinuousPaymentIntent {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof ContinuousPaymentIntent
   */
  id?: string;
  /**
   * Desired currency of the payment.
   * @type {string}
   * @memberof ContinuousPaymentIntent
   */
  currency: ContinuousPaymentIntentCurrencyEnum;
  /**
   *
   * @type {CryptoPaymentsMoney}
   * @memberof ContinuousPaymentIntent
   */
  amountPaid?: CryptoPaymentsMoney;
  /**
   *
   * @type {CryptoPaymentsMoney}
   * @memberof ContinuousPaymentIntent
   */
  amountRefunded?: CryptoPaymentsMoney;
  /**
   * Desired currency for the payments to settle in.
   * @type {string}
   * @memberof ContinuousPaymentIntent
   */
  settlementCurrency: ContinuousPaymentIntentSettlementCurrencyEnum;
  /**
   *
   * @type {Array<PaymentMethodBlockchain>}
   * @memberof ContinuousPaymentIntent
   */
  paymentMethods: Array<PaymentMethodBlockchain>;
  /**
   *
   * @type {Array<PaymentIntentFees>}
   * @memberof ContinuousPaymentIntent
   */
  fees?: Array<PaymentIntentFees>;
  /**
   * State management timeline.
   * @type {Array<Timeline>}
   * @memberof ContinuousPaymentIntent
   */
  timeline?: Array<Timeline>;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof ContinuousPaymentIntent
   */
  updateDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof ContinuousPaymentIntent
   */
  createDate?: string;
  /**
   *
   * @type {string}
   * @memberof ContinuousPaymentIntent
   */
  type: ContinuousPaymentIntentTypeEnum;
  /**
   * Unique system generated identifier for the wallet of the merchant.
   * @type {string}
   * @memberof ContinuousPaymentIntent
   */
  merchantWalletId?: string;
}

export const ContinuousPaymentIntentCurrencyEnum = {
  Usd: "USD",
  Btc: "BTC",
  Eth: "ETH"
} as const;

export type ContinuousPaymentIntentCurrencyEnum =
  typeof ContinuousPaymentIntentCurrencyEnum[keyof typeof ContinuousPaymentIntentCurrencyEnum];
export const ContinuousPaymentIntentSettlementCurrencyEnum = {
  Usd: "USD",
  Btc: "BTC",
  Eth: "ETH"
} as const;

export type ContinuousPaymentIntentSettlementCurrencyEnum =
  typeof ContinuousPaymentIntentSettlementCurrencyEnum[keyof typeof ContinuousPaymentIntentSettlementCurrencyEnum];
export const ContinuousPaymentIntentTypeEnum = {
  Continuous: "continuous"
} as const;

export type ContinuousPaymentIntentTypeEnum =
  typeof ContinuousPaymentIntentTypeEnum[keyof typeof ContinuousPaymentIntentTypeEnum];

/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CancelRefundReversalStatus } from "./cancel-refund-reversal-status";
import { FiatMoneyUsd } from "./fiat-money-usd";
import { PaymentInfoPaymentAndRefund } from "./payment-info-payment-and-refund";
import { SourceResponse } from "./source-response";

/**
 * Status information of the related cancel. This property is only present on canceled payment or refund items.
 * @export
 * @interface BasicCancel
 */
export interface BasicCancel {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof BasicCancel
   */
  id: string;
  /**
   * Type of the payment object.
   * @type {string}
   * @memberof BasicCancel
   */
  type: BasicCancelTypeEnum;
  /**
   * Unique system generated identifier for the merchant.
   * @type {string}
   * @memberof BasicCancel
   */
  merchantId: string;
  /**
   * Unique system generated identifier for the wallet of the merchant.
   * @type {string}
   * @memberof BasicCancel
   */
  merchantWalletId?: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof BasicCancel
   */
  amount: FiatMoneyUsd;
  /**
   *
   * @type {SourceResponse}
   * @memberof BasicCancel
   */
  source: SourceResponse;
  /**
   * Enumerated description of the payment.
   * @type {string}
   * @memberof BasicCancel
   */
  description?: BasicCancelDescriptionEnum;
  /**
   *
   * @type {CancelRefundReversalStatus}
   * @memberof BasicCancel
   */
  status: CancelRefundReversalStatus;
  /**
   *
   * @type {PaymentInfoPaymentAndRefund}
   * @memberof BasicCancel
   */
  originalPayment?: PaymentInfoPaymentAndRefund;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof BasicCancel
   */
  fees?: FiatMoneyUsd;
  /**
   * The channel identifier that can be set for the payment. When not provided, the default channel is used.
   * @type {string}
   * @memberof BasicCancel
   */
  channel?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof BasicCancel
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof BasicCancel
   */
  updateDate?: string;
}

export const BasicCancelTypeEnum = {
  Cancel: "cancel"
} as const;

export type BasicCancelTypeEnum =
  typeof BasicCancelTypeEnum[keyof typeof BasicCancelTypeEnum];
export const BasicCancelDescriptionEnum = {
  Payment: "Payment"
} as const;

export type BasicCancelDescriptionEnum =
  typeof BasicCancelDescriptionEnum[keyof typeof BasicCancelDescriptionEnum];

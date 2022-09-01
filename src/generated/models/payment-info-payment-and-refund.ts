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

import { FiatMoneyUsd } from "./fiat-money-usd";
import { PaymentStatus } from "./payment-status";
import { RequiredAction } from "./required-action";

/**
 * Status information of the related payment. This property is only present on refund or cancel items.
 * @export
 * @interface PaymentInfoPaymentAndRefund
 */
export interface PaymentInfoPaymentAndRefund {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof PaymentInfoPaymentAndRefund
   */
  id?: string;
  /**
   * Type of the payment object.
   * @type {string}
   * @memberof PaymentInfoPaymentAndRefund
   */
  type?: PaymentInfoPaymentAndRefundTypeEnum;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof PaymentInfoPaymentAndRefund
   */
  amount?: FiatMoneyUsd;
  /**
   * Enumerated description of the payment item.
   * @type {string}
   * @memberof PaymentInfoPaymentAndRefund
   */
  description?: PaymentInfoPaymentAndRefundDescriptionEnum;
  /**
   *
   * @type {PaymentStatus}
   * @memberof PaymentInfoPaymentAndRefund
   */
  status?: PaymentStatus;
  /**
   *
   * @type {RequiredAction}
   * @memberof PaymentInfoPaymentAndRefund
   */
  requiredAction?: RequiredAction;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof PaymentInfoPaymentAndRefund
   */
  fees?: FiatMoneyUsd;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof PaymentInfoPaymentAndRefund
   */
  createDate?: string;
}

export const PaymentInfoPaymentAndRefundTypeEnum = {
  Payment: "payment",
  Refund: "refund"
} as const;

export type PaymentInfoPaymentAndRefundTypeEnum =
  typeof PaymentInfoPaymentAndRefundTypeEnum[keyof typeof PaymentInfoPaymentAndRefundTypeEnum];
export const PaymentInfoPaymentAndRefundDescriptionEnum = {
  Payment: "Payment"
} as const;

export type PaymentInfoPaymentAndRefundDescriptionEnum =
  typeof PaymentInfoPaymentAndRefundDescriptionEnum[keyof typeof PaymentInfoPaymentAndRefundDescriptionEnum];
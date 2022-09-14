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

import { FiatCancel } from "./fiat-cancel";
import { FiatMoneyUsd } from "./fiat-money-usd";
import { FiatRefund } from "./fiat-refund";
import { MetadataPhoneEmail } from "./metadata-phone-email";
import { PaymentErrorCode } from "./payment-error-code";
import { PaymentStatus } from "./payment-status";
import { PaymentVerificationResponse } from "./payment-verification-response";
import { RequiredAction } from "./required-action";
import { RiskEvaluation } from "./risk-evaluation";
import { SourceResponse } from "./source-response";

/**
 *
 * @export
 * @interface DetailedPayment
 */
export interface DetailedPayment {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof DetailedPayment
   */
  id: string;
  /**
   * Type of the payment object.
   * @type {string}
   * @memberof DetailedPayment
   */
  type: DetailedPaymentTypeEnum;
  /**
   * Unique system generated identifier for the merchant.
   * @type {string}
   * @memberof DetailedPayment
   */
  merchantId: string;
  /**
   * Unique system generated identifier for the wallet of the merchant.
   * @type {string}
   * @memberof DetailedPayment
   */
  merchantWalletId?: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof DetailedPayment
   */
  amount: FiatMoneyUsd;
  /**
   *
   * @type {SourceResponse}
   * @memberof DetailedPayment
   */
  source: SourceResponse;
  /**
   * Enumerated description of the payment.
   * @type {string}
   * @memberof DetailedPayment
   */
  description?: DetailedPaymentDescriptionEnum;
  /**
   *
   * @type {PaymentStatus}
   * @memberof DetailedPayment
   */
  status: PaymentStatus;
  /**
   * Determines if a payment has successfully been captured. This property is only present for payments that did not use auto capture.
   * @type {boolean}
   * @memberof DetailedPayment
   */
  captured?: boolean;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof DetailedPayment
   */
  captureAmount?: FiatMoneyUsd;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof DetailedPayment
   */
  captureDate?: string;
  /**
   *
   * @type {RequiredAction}
   * @memberof DetailedPayment
   */
  requiredAction?: RequiredAction;
  /**
   *
   * @type {PaymentVerificationResponse}
   * @memberof DetailedPayment
   */
  verification?: PaymentVerificationResponse;
  /**
   *
   * @type {FiatCancel}
   * @memberof DetailedPayment
   */
  cancel?: FiatCancel | null;
  /**
   *
   * @type {Array<FiatRefund>}
   * @memberof DetailedPayment
   */
  refunds?: Array<FiatRefund>;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof DetailedPayment
   */
  fees?: FiatMoneyUsd;
  /**
   * Payment tracking reference. Will be present once known.
   * @type {string}
   * @memberof DetailedPayment
   */
  trackingRef?: string | null;
  /**
   *
   * @type {PaymentErrorCode}
   * @memberof DetailedPayment
   */
  errorCode?: PaymentErrorCode | null;
  /**
   *
   * @type {MetadataPhoneEmail}
   * @memberof DetailedPayment
   */
  metadata?: MetadataPhoneEmail;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof DetailedPayment
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   * The channel identifier that can be set for the payment. When not provided, the default channel is used.
   * @type {string}
   * @memberof DetailedPayment
   */
  channel?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof DetailedPayment
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof DetailedPayment
   */
  updateDate?: string;
}

export const DetailedPaymentTypeEnum = {
  Payment: "payment"
} as const;

export type DetailedPaymentTypeEnum =
  typeof DetailedPaymentTypeEnum[keyof typeof DetailedPaymentTypeEnum];
export const DetailedPaymentDescriptionEnum = {
  Payment: "Payment"
} as const;

export type DetailedPaymentDescriptionEnum =
  typeof DetailedPaymentDescriptionEnum[keyof typeof DetailedPaymentDescriptionEnum];

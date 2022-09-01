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

import { BankDestination } from "./bank-destination";
import { FiatMoneyUsd } from "./fiat-money-usd";
import { FinalAdjustments } from "./final-adjustments";
import { PayoutErrorCode } from "./payout-error-code";
import { PayoutStatus } from "./payout-status";
import { RiskEvaluation } from "./risk-evaluation";
import { UnwithdrawalObject } from "./unwithdrawal-object";

/**
 *
 * @export
 * @interface Payout
 */
export interface Payout {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof Payout
   */
  id?: string;
  /**
   * The identifier of the source wallet used to fund a payout.
   * @type {string}
   * @memberof Payout
   */
  sourceWalletId?: string;
  /**
   *
   * @type {BankDestination}
   * @memberof Payout
   */
  destination?: BankDestination;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof Payout
   */
  amount?: FiatMoneyUsd;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof Payout
   */
  fees?: FiatMoneyUsd;
  /**
   *
   * @type {PayoutStatus}
   * @memberof Payout
   */
  status?: PayoutStatus;
  /**
   * A payout tracking reference. Will be present once known.
   * @type {any}
   * @memberof Payout
   */
  trackingRef?: any | null;
  /**
   *
   * @type {PayoutErrorCode}
   * @memberof Payout
   */
  errorCode?: PayoutErrorCode | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof Payout
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   *
   * @type {FinalAdjustments}
   * @memberof Payout
   */
  adjustments?: FinalAdjustments | null;
  /**
   *
   * @type {UnwithdrawalObject}
   * @memberof Payout
   */
  return?: UnwithdrawalObject | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Payout
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Payout
   */
  updateDate?: string;
}
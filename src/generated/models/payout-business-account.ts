/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.2
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { BankDestination } from "./bank-destination";
import { FiatMoney } from "./fiat-money";
import { FiatMoneyUsd } from "./fiat-money-usd";
import { FinalAdjustments } from "./final-adjustments";
import { PayoutErrorCode } from "./payout-error-code";
import { PayoutStatus } from "./payout-status";
import { RiskEvaluation } from "./risk-evaluation";
import { UnwithdrawalObject } from "./unwithdrawal-object";

/**
 *
 * @export
 * @interface PayoutBusinessAccount
 */
export interface PayoutBusinessAccount {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof PayoutBusinessAccount
   */
  id?: string;
  /**
   * The identifier of the source wallet used to fund a payout.
   * @type {string}
   * @memberof PayoutBusinessAccount
   */
  sourceWalletId?: string;
  /**
   *
   * @type {BankDestination}
   * @memberof PayoutBusinessAccount
   */
  destination?: BankDestination;
  /**
   *
   * @type {FiatMoney}
   * @memberof PayoutBusinessAccount
   */
  amount?: FiatMoney;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof PayoutBusinessAccount
   */
  fees?: FiatMoneyUsd;
  /**
   *
   * @type {PayoutStatus}
   * @memberof PayoutBusinessAccount
   */
  status?: PayoutStatus;
  /**
   * A payout tracking reference. Will be present once known.
   * @type {any}
   * @memberof PayoutBusinessAccount
   */
  trackingRef?: any | null;
  /**
   *
   * @type {PayoutErrorCode}
   * @memberof PayoutBusinessAccount
   */
  errorCode?: PayoutErrorCode | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof PayoutBusinessAccount
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   *
   * @type {FinalAdjustments}
   * @memberof PayoutBusinessAccount
   */
  adjustments?: FinalAdjustments | null;
  /**
   *
   * @type {UnwithdrawalObject}
   * @memberof PayoutBusinessAccount
   */
  return?: UnwithdrawalObject | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof PayoutBusinessAccount
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof PayoutBusinessAccount
   */
  updateDate?: string;
}

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

import { FiatMoney } from "./fiat-money";
import { FiatMoneyUsd } from "./fiat-money-usd";
import { RiskEvaluation } from "./risk-evaluation";
import { WalletLocation } from "./wallet-location";

/**
 * A deposit
 * @export
 * @interface BusinessAccountDeposit
 */
export interface BusinessAccountDeposit {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof BusinessAccountDeposit
   */
  id: string;
  /**
   * The identifier for the bank account where the funds were deposited from.
   * @type {string}
   * @memberof BusinessAccountDeposit
   */
  sourceWalletId?: string;
  /**
   *
   * @type {WalletLocation}
   * @memberof BusinessAccountDeposit
   */
  destination: WalletLocation;
  /**
   *
   * @type {FiatMoney}
   * @memberof BusinessAccountDeposit
   */
  amount: FiatMoney;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof BusinessAccountDeposit
   */
  fee?: FiatMoneyUsd;
  /**
   * Status of the deposit. Status `pending` indicates that the deposit is in the process of running; `complete` indicates it finished successfully; `failed` indicates it failed.
   * @type {string}
   * @memberof BusinessAccountDeposit
   */
  status: BusinessAccountDepositStatusEnum;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof BusinessAccountDeposit
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof BusinessAccountDeposit
   */
  createDate: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof BusinessAccountDeposit
   */
  updateDate?: string;
}

export const BusinessAccountDepositStatusEnum = {
  Pending: "pending",
  Complete: "complete",
  Failed: "failed"
} as const;

export type BusinessAccountDepositStatusEnum =
  typeof BusinessAccountDepositStatusEnum[keyof typeof BusinessAccountDepositStatusEnum];

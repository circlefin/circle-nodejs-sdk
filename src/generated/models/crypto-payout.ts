/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CryptoPayoutDestination } from "./crypto-payout-destination";
// May contain unused imports in some cases
// @ts-ignore
import { PayoutErrorCode } from "./payout-error-code";
// May contain unused imports in some cases
// @ts-ignore
import { PayoutMoney } from "./payout-money";
// May contain unused imports in some cases
// @ts-ignore
import { PayoutStatus } from "./payout-status";
// May contain unused imports in some cases
// @ts-ignore
import { RiskEvaluation } from "./risk-evaluation";

/**
 *
 * @export
 * @interface CryptoPayout
 */
export interface CryptoPayout {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof CryptoPayout
   */
  id?: string;
  /**
   * The identifier of the source wallet used to fund a payout.
   * @type {string}
   * @memberof CryptoPayout
   */
  sourceWalletId?: string;
  /**
   *
   * @type {CryptoPayoutDestination}
   * @memberof CryptoPayout
   */
  destination?: CryptoPayoutDestination;
  /**
   *
   * @type {PayoutMoney}
   * @memberof CryptoPayout
   */
  amount?: PayoutMoney;
  /**
   *
   * @type {PayoutMoney}
   * @memberof CryptoPayout
   */
  toAmount?: PayoutMoney;
  /**
   *
   * @type {PayoutMoney}
   * @memberof CryptoPayout
   */
  fees?: PayoutMoney;
  /**
   *
   * @type {PayoutMoney}
   * @memberof CryptoPayout
   */
  networkFees?: PayoutMoney;
  /**
   *
   * @type {PayoutStatus}
   * @memberof CryptoPayout
   */
  status?: PayoutStatus;
  /**
   *
   * @type {PayoutErrorCode}
   * @memberof CryptoPayout
   */
  errorCode?: PayoutErrorCode | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof CryptoPayout
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof CryptoPayout
   */
  createDate?: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof CryptoPayout
   */
  updateDate?: string;
}

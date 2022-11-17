/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, Accounts, and Crypto Payments APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { AchAccountType } from "./ach-account-type";
// May contain unused imports in some cases
// @ts-ignore
import { AchBillingDetails } from "./ach-billing-details";
// May contain unused imports in some cases
// @ts-ignore
import { AchVerificationErrorCodes } from "./ach-verification-error-codes";
// May contain unused imports in some cases
// @ts-ignore
import { BankAddress } from "./bank-address";
// May contain unused imports in some cases
// @ts-ignore
import { ExternalFiatAccountStatus } from "./external-fiat-account-status";
// May contain unused imports in some cases
// @ts-ignore
import { MetadataPhoneEmail } from "./metadata-phone-email";
// May contain unused imports in some cases
// @ts-ignore
import { RiskEvaluation } from "./risk-evaluation";

/**
 *
 * @export
 * @interface Ach
 */
export interface Ach {
  /**
   * Unique system generated identifier for the entity.
   * @type {string}
   * @memberof Ach
   */
  id: string;
  /**
   *
   * @type {ExternalFiatAccountStatus}
   * @memberof Ach
   */
  status?: ExternalFiatAccountStatus;
  /**
   * The redacted account number of the ACH account.
   * @type {string}
   * @memberof Ach
   */
  accountNumber: string;
  /**
   * The routing number of the ACH account.
   * @type {string}
   * @memberof Ach
   */
  routingNumber: string;
  /**
   *
   * @type {AchBillingDetails}
   * @memberof Ach
   */
  billingDetails: AchBillingDetails;
  /**
   *
   * @type {AchAccountType}
   * @memberof Ach
   */
  bankAccountType?: AchAccountType | null;
  /**
   *
   * @type {BankAddress}
   * @memberof Ach
   */
  bankAddress: BankAddress;
  /**
   * A UUID that uniquely identifies the account number. If the same account is used more than once, each card object will have a different id, but the fingerprint will stay the same.
   * @type {string}
   * @memberof Ach
   */
  fingerprint: string;
  /**
   *
   * @type {AchVerificationErrorCodes}
   * @memberof Ach
   */
  errorCode?: AchVerificationErrorCodes | null;
  /**
   *
   * @type {RiskEvaluation}
   * @memberof Ach
   */
  riskEvaluation?: RiskEvaluation | null;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Ach
   */
  createDate: string;
  /**
   * ISO-8601 UTC date/time format.
   * @type {string}
   * @memberof Ach
   */
  updateDate: string;
  /**
   *
   * @type {MetadataPhoneEmail}
   * @memberof Ach
   */
  metadata: MetadataPhoneEmail;
}

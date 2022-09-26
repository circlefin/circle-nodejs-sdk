/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.3
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Results of risk evaluation. Only present if the payment is denied by Circle\'s risk service.
 * @export
 * @interface RiskEvaluation
 */
export interface RiskEvaluation {
  /**
   * Enumerated decision of the account.
   * @type {string}
   * @memberof RiskEvaluation
   */
  decision?: RiskEvaluationDecisionEnum;
  /**
   * Risk reason for the definitive decision outcome.
   * @type {string}
   * @memberof RiskEvaluation
   */
  reason?: string | null;
}

export const RiskEvaluationDecisionEnum = {
  Approved: "approved",
  Denied: "denied",
  Review: "review"
} as const;

export type RiskEvaluationDecisionEnum =
  typeof RiskEvaluationDecisionEnum[keyof typeof RiskEvaluationDecisionEnum];

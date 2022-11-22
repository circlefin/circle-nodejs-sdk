/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { FiatMoneyUsd } from "./fiat-money-usd";
// May contain unused imports in some cases
// @ts-ignore
import { MockSenPaymentBeneficiaryBankInstruction } from "./mock-sen-payment-beneficiary-bank-instruction";

/**
 *
 * @export
 * @interface MockSenPaymentResponse
 */
export interface MockSenPaymentResponse {
  /**
   * Wire tracking reference that needs to be set in the wire reference to beneficiary field. This field is retrievable through the response during wire creation or via the bank instruction endpoint.
   * @type {string}
   * @memberof MockSenPaymentResponse
   */
  trackingRef?: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof MockSenPaymentResponse
   */
  amount?: FiatMoneyUsd;
  /**
   *
   * @type {MockSenPaymentBeneficiaryBankInstruction}
   * @memberof MockSenPaymentResponse
   */
  beneficiaryBank?: MockSenPaymentBeneficiaryBankInstruction;
  /**
   * Enumerated status of the wire payment. Status `pending` indicates that the wire payment is in process; `processed` indicates it finished successfully; `failed` indicates it failed.
   * @type {string}
   * @memberof MockSenPaymentResponse
   */
  status?: MockSenPaymentResponseStatusEnum;
}

export const MockSenPaymentResponseStatusEnum = {
  Pending: "pending",
  Processed: "processed",
  Failed: "failed"
} as const;

export type MockSenPaymentResponseStatusEnum =
  typeof MockSenPaymentResponseStatusEnum[keyof typeof MockSenPaymentResponseStatusEnum];

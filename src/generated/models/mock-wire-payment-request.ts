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
import { MockWirePaymentBeneficiaryBankInstruction } from "./mock-wire-payment-beneficiary-bank-instruction";

/**
 *
 * @export
 * @interface MockWirePaymentRequest
 */
export interface MockWirePaymentRequest {
  /**
   * Wire tracking reference that needs to be set in the wire reference to beneficiary field. This field is retrievable through the response during wire creation or via the bank instruction endpoint.
   * @type {string}
   * @memberof MockWirePaymentRequest
   */
  trackingRef: string;
  /**
   *
   * @type {FiatMoneyUsd}
   * @memberof MockWirePaymentRequest
   */
  amount: FiatMoneyUsd;
  /**
   *
   * @type {MockWirePaymentBeneficiaryBankInstruction}
   * @memberof MockWirePaymentRequest
   */
  beneficiaryBank: MockWirePaymentBeneficiaryBankInstruction;
}

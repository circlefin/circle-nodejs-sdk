/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { BankAddressIbanSupported } from "./bank-address-iban-supported";
// May contain unused imports in some cases
// @ts-ignore
import { BillingDetails } from "./billing-details";

/**
 * Relevant fields for non-U.S. bank accounts that support IBAN.
 * @export
 * @interface WireCreationRequestIban
 */
export interface WireCreationRequestIban {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof WireCreationRequestIban
   */
  idempotencyKey: string;
  /**
   * International Bank Account Number (IBAN) for the bank account.
   * @type {string}
   * @memberof WireCreationRequestIban
   */
  iban: string;
  /**
   *
   * @type {BillingDetails}
   * @memberof WireCreationRequestIban
   */
  billingDetails: BillingDetails;
  /**
   *
   * @type {BankAddressIbanSupported}
   * @memberof WireCreationRequestIban
   */
  bankAddress: BankAddressIbanSupported;
}

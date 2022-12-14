/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { BankAddressNonIban } from "./bank-address-non-iban";
// May contain unused imports in some cases
// @ts-ignore
import { BillingDetails } from "./billing-details";

/**
 * Relevant fields for non-U.S. banks that do NOT support IBAN.
 * @export
 * @interface WireCreationRequestAccountNumber
 */
export interface WireCreationRequestAccountNumber {
  /**
   * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
   * @type {string}
   * @memberof WireCreationRequestAccountNumber
   */
  idempotencyKey: string;
  /**
   * Account number that identifies the bank account.
   * @type {string}
   * @memberof WireCreationRequestAccountNumber
   */
  accountNumber: string;
  /**
   * The bank\'s SWIFT / BIC code.
   * @type {string}
   * @memberof WireCreationRequestAccountNumber
   */
  routingNumber: string;
  /**
   *
   * @type {BillingDetails}
   * @memberof WireCreationRequestAccountNumber
   */
  billingDetails: BillingDetails;
  /**
   *
   * @type {BankAddressNonIban}
   * @memberof WireCreationRequestAccountNumber
   */
  bankAddress: BankAddressNonIban;
}

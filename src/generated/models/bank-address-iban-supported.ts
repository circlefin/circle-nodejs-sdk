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

/**
 * The address of the bank. City and country fields are required.
 * @export
 * @interface BankAddressIbanSupported
 */
export interface BankAddressIbanSupported {
  /**
   * Name of the bank. This property is required for bank accounts outside of the US that do not support IBAN\'
   * @type {string}
   * @memberof BankAddressIbanSupported
   */
  bankName?: string;
  /**
   * City portion of the address. This property is required for bank accounts outside of the US.
   * @type {string}
   * @memberof BankAddressIbanSupported
   */
  city: string;
  /**
   * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
   * @type {string}
   * @memberof BankAddressIbanSupported
   */
  country: string;
  /**
   * Line one of the street address.
   * @type {string}
   * @memberof BankAddressIbanSupported
   */
  line1?: string;
  /**
   * Line two of the street address.
   * @type {string}
   * @memberof BankAddressIbanSupported
   */
  line2?: string;
  /**
   * State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.
   * @type {string}
   * @memberof BankAddressIbanSupported
   */
  district?: string;
}

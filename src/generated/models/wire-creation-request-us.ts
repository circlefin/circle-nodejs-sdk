/* tslint:disable */
/* eslint-disable */
/**
 * Core Functionality
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { BankAddress } from './bank-address';
import { BillingDetails } from './billing-details';

/**
 * Relevant fields for U.S. bank accounts.
 * @export
 * @interface WireCreationRequestUS
 */
export interface WireCreationRequestUS {
    /**
     * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
     * @type {string}
     * @memberof WireCreationRequestUS
     */
    'idempotencyKey': string;
    /**
     * Account number that identifies the bank account.
     * @type {string}
     * @memberof WireCreationRequestUS
     */
    'accountNumber': string;
    /**
     * ABA routing number for the bank account. Note this has to be specific for bank wire transfers.
     * @type {string}
     * @memberof WireCreationRequestUS
     */
    'routingNumber': string;
    /**
     * 
     * @type {BillingDetails}
     * @memberof WireCreationRequestUS
     */
    'billingDetails': BillingDetails;
    /**
     * 
     * @type {BankAddress}
     * @memberof WireCreationRequestUS
     */
    'bankAddress': BankAddress;
}


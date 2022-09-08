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


import { BillingDetails } from './billing-details';

/**
 * 
 * @export
 * @interface SEPACreationRequest
 */
export interface SEPACreationRequest {
    /**
     * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
     * @type {string}
     * @memberof SEPACreationRequest
     */
    'idempotencyKey': string;
    /**
     * International Bank Account Number (IBAN) for the bank account.
     * @type {string}
     * @memberof SEPACreationRequest
     */
    'iban': string;
    /**
     * 
     * @type {BillingDetails}
     * @memberof SEPACreationRequest
     */
    'billingDetails': BillingDetails;
}


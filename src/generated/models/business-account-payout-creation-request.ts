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


import { BusinessAccountDestinationRequest } from './business-account-destination-request';
import { FiatMoney } from './fiat-money';

/**
 * 
 * @export
 * @interface BusinessAccountPayoutCreationRequest
 */
export interface BusinessAccountPayoutCreationRequest {
    /**
     * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
     * @type {string}
     * @memberof BusinessAccountPayoutCreationRequest
     */
    'idempotencyKey': string;
    /**
     * 
     * @type {BusinessAccountDestinationRequest}
     * @memberof BusinessAccountPayoutCreationRequest
     */
    'destination': BusinessAccountDestinationRequest;
    /**
     * 
     * @type {FiatMoney}
     * @memberof BusinessAccountPayoutCreationRequest
     */
    'amount': FiatMoney;
}


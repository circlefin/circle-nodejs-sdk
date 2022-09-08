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


import { Money } from './money';
import { TransferCreationRequestDestination } from './transfer-creation-request-destination';
import { TransferRequestSourceWalletLocation } from './transfer-request-source-wallet-location';

/**
 * 
 * @export
 * @interface TransferCreationRequest
 */
export interface TransferCreationRequest {
    /**
     * Universally unique identifier (UUID v4) idempotency key. This key is utilized to ensure exactly-once execution of mutating requests.
     * @type {string}
     * @memberof TransferCreationRequest
     */
    'idempotencyKey': string;
    /**
     * 
     * @type {TransferRequestSourceWalletLocation}
     * @memberof TransferCreationRequest
     */
    'source': TransferRequestSourceWalletLocation;
    /**
     * 
     * @type {TransferCreationRequestDestination}
     * @memberof TransferCreationRequest
     */
    'destination': TransferCreationRequestDestination;
    /**
     * 
     * @type {Money}
     * @memberof TransferCreationRequest
     */
    'amount': Money;
}


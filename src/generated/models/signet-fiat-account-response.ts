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


import { ExternalFiatAccountStatus } from './external-fiat-account-status';

/**
 * 
 * @export
 * @interface SignetFiatAccountResponse
 */
export interface SignetFiatAccountResponse {
    /**
     * Unique system generated identifier for the entity.
     * @type {string}
     * @memberof SignetFiatAccountResponse
     */
    'id': string;
    /**
     * 
     * @type {ExternalFiatAccountStatus}
     * @memberof SignetFiatAccountResponse
     */
    'status': ExternalFiatAccountStatus;
    /**
     * Tracking ref that needs to be set in the public description field when you send the funds to Circle Signet wallet.
     * @type {string}
     * @memberof SignetFiatAccountResponse
     */
    'trackingRef': string;
    /**
     * Your signet wallet address.
     * @type {string}
     * @memberof SignetFiatAccountResponse
     */
    'walletAddress': string;
    /**
     * ISO-8601 UTC date/time format.
     * @type {string}
     * @memberof SignetFiatAccountResponse
     */
    'createDate': string;
    /**
     * ISO-8601 UTC date/time format.
     * @type {string}
     * @memberof SignetFiatAccountResponse
     */
    'updateDate': string;
}


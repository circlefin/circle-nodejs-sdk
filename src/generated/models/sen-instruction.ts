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



/**
 * 
 * @export
 * @interface SenInstruction
 */
export interface SenInstruction {
    /**
     * Circle tracking reference that needs to be set in the memo field.
     * @type {string}
     * @memberof SenInstruction
     */
    'trackingRef'?: string;
    /**
     * Circle corporate Silvergate SEN account number that needs to be set as destination.
     * @type {string}
     * @memberof SenInstruction
     */
    'accountNumber'?: string;
    /**
     * Currency of Circle corporate Silvergate SEN account.
     * @type {string}
     * @memberof SenInstruction
     */
    'currency'?: string;
}


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
 * @interface MetadataCardAndAch
 */
export interface MetadataCardAndAch {
    /**
     * Email of the user.
     * @type {string}
     * @memberof MetadataCardAndAch
     */
    'email': string;
    /**
     * Phone number of the user in E.164 format. We recommend using a library such as [libphonenumber](https://github.com/google/libphonenumber) to parse and validate phone numbers.
     * @type {string}
     * @memberof MetadataCardAndAch
     */
    'phoneNumber'?: string;
    /**
     * Hash of the session identifier; typically of the end user. This helps us make risk decisions and prevent fraud. IMPORTANT: Please hash the session identifier to prevent sending us actual session identifiers. 
     * @type {string}
     * @memberof MetadataCardAndAch
     */
    'sessionId': string;
    /**
     * Single IPv4 or IPv6 address of user\'
     * @type {string}
     * @memberof MetadataCardAndAch
     */
    'ipAddress': string;
}


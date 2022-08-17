/* tslint:disable */
/* eslint-disable */
/**
 * Circle APIs
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
 * @interface BillingDetails
 */
export interface BillingDetails {
    /**
     * Full name of the card or bank account holder.
     * @type {string}
     * @memberof BillingDetails
     */
    'name': string;
    /**
     * City portion of the address.
     * @type {string}
     * @memberof BillingDetails
     */
    'city': string;
    /**
     * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
     * @type {string}
     * @memberof BillingDetails
     */
    'country': string;
    /**
     * Line one of the street address.
     * @type {string}
     * @memberof BillingDetails
     */
    'line1': string;
    /**
     * Line two of the street address.
     * @type {string}
     * @memberof BillingDetails
     */
    'line2'?: string;
    /**
     * State / County / Province / Region portion of the address. If the country is US or Canada, then district is required and should use the two-letter code for the subdivision.
     * @type {string}
     * @memberof BillingDetails
     */
    'district'?: string;
    /**
     * Postal / ZIP code of the address.
     * @type {string}
     * @memberof BillingDetails
     */
    'postalCode': string;
}


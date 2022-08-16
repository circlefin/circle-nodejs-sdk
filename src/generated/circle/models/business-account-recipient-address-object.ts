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


import { Chain } from './chain';
import { Currency } from './currency';

/**
 * 
 * @export
 * @interface BusinessAccountRecipientAddressObject
 */
export interface BusinessAccountRecipientAddressObject {
    /**
     * Unique system generated identifier for the entity.
     * @type {string}
     * @memberof BusinessAccountRecipientAddressObject
     */
    'id'?: string;
    /**
     * An alphanumeric string representing a blockchain address. Will be in different formats for different chains. It is important to preserve the exact formatting and capitalization of the address.
     * @type {string}
     * @memberof BusinessAccountRecipientAddressObject
     */
    'address'?: string;
    /**
     * The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
     * @type {string}
     * @memberof BusinessAccountRecipientAddressObject
     */
    'addressTag'?: string | null;
    /**
     * 
     * @type {Chain}
     * @memberof BusinessAccountRecipientAddressObject
     */
    'chain'?: Chain;
    /**
     * 
     * @type {Currency}
     * @memberof BusinessAccountRecipientAddressObject
     */
    'currency'?: Currency | null;
    /**
     * An identifier or sentence that describes the recipient.
     * @type {string}
     * @memberof BusinessAccountRecipientAddressObject
     */
    'description'?: string;
}


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

import { RequestFile } from './models';

/**
* Billing details of the card holder.
*/
export class SimpleBillingDetails {
    /**
    * Country portion of the address. Formatted as a two-letter country code specified in ISO 3166-1 alpha-2.
    */
    'country': string;
    /**
    * State / County / Province / Region portion of the address. US and Canada use the two-letter code for the subdivision.
    */
    'district': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "country",
            "baseName": "country",
            "type": "string"
        },
        {
            "name": "district",
            "baseName": "district",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return SimpleBillingDetails.attributeTypeMap;
    }
}

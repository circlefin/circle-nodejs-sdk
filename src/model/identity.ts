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
import { IdentityAddress } from './identityAddress';

/**
* The identity of the originator. Identities are required when:   * `destination.type: \"blockchain\"`   * `destination.chain: \"ETH\"`   * `amount.amount` >= $3,000 in value 
*/
export class Identity {
    /**
    * The type of identity for the originator. * `individual` - A uniquely distinguishable individual. * `business` - Any entity other than a natural person that can establish a permanent customer relationship with an affected entity or otherwise own property. This can include companies, foundations, anstalt, partnerships, associations and other relevantly similar entities. 
    */
    'type': Identity.TypeEnum;
    /**
    * Full name of the identity.
    */
    'name': string;
    'addresses': Array<IdentityAddress>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Identity.TypeEnum"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "addresses",
            "baseName": "addresses",
            "type": "Array<IdentityAddress>"
        }    ];

    static getAttributeTypeMap() {
        return Identity.attributeTypeMap;
    }
}

export namespace Identity {
    export enum TypeEnum {
        Individual = <any> 'individual',
        Business = <any> 'business'
    }
}
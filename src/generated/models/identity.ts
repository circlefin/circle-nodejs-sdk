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


import { IdentityAddress } from './identity-address';

/**
 * The identity of the originator. Identities are required when:   * `destination.type: \"blockchain\"`   * `destination.chain: \"ETH\"`   * `amount.amount` >= $3,000 in value 
 * @export
 * @interface Identity
 */
export interface Identity {
    /**
     * The type of identity for the originator. * `individual` - A uniquely distinguishable individual. * `business` - Any entity other than a natural person that can establish a permanent customer relationship with an affected entity or otherwise own property. This can include companies, foundations, anstalt, partnerships, associations and other relevantly similar entities. 
     * @type {string}
     * @memberof Identity
     */
    'type': IdentityTypeEnum;
    /**
     * Full name of the identity.
     * @type {string}
     * @memberof Identity
     */
    'name': string;
    /**
     * 
     * @type {Array<IdentityAddress>}
     * @memberof Identity
     */
    'addresses': Array<IdentityAddress>;
}

export const IdentityTypeEnum = {
    Individual: 'individual',
    Business: 'business'
} as const;

export type IdentityTypeEnum = typeof IdentityTypeEnum[keyof typeof IdentityTypeEnum];



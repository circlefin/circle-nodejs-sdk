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

/**
 * 
 * @export
 * @interface TransferRequestBlockchainLocation
 */
export interface TransferRequestBlockchainLocation {
    /**
     * 
     * @type {string}
     * @memberof TransferRequestBlockchainLocation
     */
    'type': TransferRequestBlockchainLocationTypeEnum;
    /**
     * The blockchain address.
     * @type {string}
     * @memberof TransferRequestBlockchainLocation
     */
    'address': string;
    /**
     * The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
     * @type {string}
     * @memberof TransferRequestBlockchainLocation
     */
    'addressTag'?: string | null;
    /**
     * 
     * @type {Chain}
     * @memberof TransferRequestBlockchainLocation
     */
    'chain': Chain;
}

export const TransferRequestBlockchainLocationTypeEnum = {
    Blockchain: 'blockchain'
} as const;

export type TransferRequestBlockchainLocationTypeEnum = typeof TransferRequestBlockchainLocationTypeEnum[keyof typeof TransferRequestBlockchainLocationTypeEnum];



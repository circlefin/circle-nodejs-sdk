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


import { Identity } from './identity';

/**
 * 
 * @export
 * @interface TransferRequestSourceWalletLocation
 */
export interface TransferRequestSourceWalletLocation {
    /**
     * 
     * @type {string}
     * @memberof TransferRequestSourceWalletLocation
     */
    'type': TransferRequestSourceWalletLocationTypeEnum;
    /**
     * The id of the wallet.
     * @type {string}
     * @memberof TransferRequestSourceWalletLocation
     */
    'id': string;
    /**
     * 
     * @type {Array<Identity>}
     * @memberof TransferRequestSourceWalletLocation
     */
    'identities'?: Array<Identity>;
}

export const TransferRequestSourceWalletLocationTypeEnum = {
    Wallet: 'wallet'
} as const;

export type TransferRequestSourceWalletLocationTypeEnum = typeof TransferRequestSourceWalletLocationTypeEnum[keyof typeof TransferRequestSourceWalletLocationTypeEnum];



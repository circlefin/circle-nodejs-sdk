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


import { TokenAmount } from './token-amount';

/**
 * 
 * @export
 * @interface Stablecoin
 */
export interface Stablecoin {
    /**
     * Name of the stablecoin.
     * @type {string}
     * @memberof Stablecoin
     */
    'name'?: string;
    /**
     * Symbol of the stablecoin.
     * @type {string}
     * @memberof Stablecoin
     */
    'symbol'?: string;
    /**
     * Total circulating amount of the stablecoin.
     * @type {string}
     * @memberof Stablecoin
     */
    'totalAmount'?: string;
    /**
     * A list of the broken down totalAmount by chain of the stablecoin.
     * @type {Array<TokenAmount>}
     * @memberof Stablecoin
     */
    'chains'?: Array<TokenAmount>;
}


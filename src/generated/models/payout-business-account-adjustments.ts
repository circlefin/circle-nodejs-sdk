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


import { FiatMoneyUsd } from './fiat-money-usd';

/**
 * Final adjustment which increases (credits) or decreases (debits) the total returned amount to the source wallet.
 * @export
 * @interface PayoutBusinessAccountAdjustments
 */
export interface PayoutBusinessAccountAdjustments {
    /**
     * 
     * @type {FiatMoneyUsd}
     * @memberof PayoutBusinessAccountAdjustments
     */
    'fxCredit'?: FiatMoneyUsd;
    /**
     * 
     * @type {FiatMoneyUsd}
     * @memberof PayoutBusinessAccountAdjustments
     */
    'fxDebit'?: FiatMoneyUsd;
}


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
import { FiatMoneyUsd } from './fiatMoneyUsd';

/**
* Final adjustment which increases (credits) or decreases (debits) the total returned amount to the source wallet.
*/
export class PayoutBusinessAccountAdjustments {
    'fxCredit'?: FiatMoneyUsd;
    'fxDebit'?: FiatMoneyUsd;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "fxCredit",
            "baseName": "fxCredit",
            "type": "FiatMoneyUsd"
        },
        {
            "name": "fxDebit",
            "baseName": "fxDebit",
            "type": "FiatMoneyUsd"
        }    ];

    static getAttributeTypeMap() {
        return PayoutBusinessAccountAdjustments.attributeTypeMap;
    }
}

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
import { MockAchAccount } from './mockAchAccount';

export class MockAchAccountCreationRequest {
    'account': MockAchAccount;
    'balance': FiatMoneyUsd;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "account",
            "baseName": "account",
            "type": "MockAchAccount"
        },
        {
            "name": "balance",
            "baseName": "balance",
            "type": "FiatMoneyUsd"
        }    ];

    static getAttributeTypeMap() {
        return MockAchAccountCreationRequest.attributeTypeMap;
    }
}

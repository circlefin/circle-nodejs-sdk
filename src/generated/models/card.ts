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


import { BillingDetails } from './billing-details';
import { CardVerificationResponse } from './card-verification-response';
import { ExternalFiatAccountStatus } from './external-fiat-account-status';
import { MetadataPhoneEmail } from './metadata-phone-email';
import { RiskEvaluation } from './risk-evaluation';
import { VerificationErrorCode } from './verification-error-code';

/**
 * 
 * @export
 * @interface Card
 */
export interface Card {
    /**
     * Unique system generated identifier for the entity.
     * @type {string}
     * @memberof Card
     */
    'id': string;
    /**
     * 
     * @type {ExternalFiatAccountStatus}
     * @memberof Card
     */
    'status': ExternalFiatAccountStatus;
    /**
     * 
     * @type {BillingDetails}
     * @memberof Card
     */
    'billingDetails': BillingDetails;
    /**
     * Two digit number representing the card\'s expiration month.
     * @type {number}
     * @memberof Card
     */
    'expMonth': number;
    /**
     * Four digit number representing the card\'s expiration year.
     * @type {number}
     * @memberof Card
     */
    'expYear': number;
    /**
     * The network of the card.
     * @type {string}
     * @memberof Card
     */
    'network': CardNetworkEnum;
    /**
     * The last 4 digits of the card.
     * @type {string}
     * @memberof Card
     */
    'last4': string;
    /**
     * The bank identification number (BIN), the first 6 digits of the card.
     * @type {string}
     * @memberof Card
     */
    'bin'?: string;
    /**
     * The country code of the issuer bank. Follows the ISO 3166-1 alpha-2 standard.
     * @type {string}
     * @memberof Card
     */
    'issuerCountry'?: string;
    /**
     * The funding type of the card. Possible values are `credit`, `debit`, `prepaid`, and `unknown`.
     * @type {string}
     * @memberof Card
     */
    'fundingType'?: CardFundingTypeEnum;
    /**
     * A UUID that uniquely identifies the account number. If the same account is used more than once, each card object will have a different id, but the fingerprint will stay the same.
     * @type {string}
     * @memberof Card
     */
    'fingerprint': string;
    /**
     * 
     * @type {VerificationErrorCode}
     * @memberof Card
     */
    'errorCode'?: VerificationErrorCode | null;
    /**
     * 
     * @type {CardVerificationResponse}
     * @memberof Card
     */
    'verification': CardVerificationResponse;
    /**
     * 
     * @type {RiskEvaluation}
     * @memberof Card
     */
    'riskEvaluation'?: RiskEvaluation | null;
    /**
     * 
     * @type {MetadataPhoneEmail}
     * @memberof Card
     */
    'metadata': MetadataPhoneEmail;
    /**
     * ISO-8601 UTC date/time format.
     * @type {string}
     * @memberof Card
     */
    'createDate': string;
    /**
     * ISO-8601 UTC date/time format.
     * @type {string}
     * @memberof Card
     */
    'updateDate': string;
}

export const CardNetworkEnum = {
    Visa: 'VISA',
    Mastercard: 'MASTERCARD',
    Amex: 'AMEX',
    Unknown: 'UNKNOWN'
} as const;

export type CardNetworkEnum = typeof CardNetworkEnum[keyof typeof CardNetworkEnum];
export const CardFundingTypeEnum = {
    Credit: 'credit',
    Debit: 'debit',
    Prepaid: 'prepaid',
    Unknown: 'unknown'
} as const;

export type CardFundingTypeEnum = typeof CardFundingTypeEnum[keyof typeof CardFundingTypeEnum];



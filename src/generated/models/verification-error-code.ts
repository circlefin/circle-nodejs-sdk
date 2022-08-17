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



/**
 * Indicates the failure reason of the card verification. Only present on cards with failed verification. Possible values are [verification_failed, verification_fraud_detected, verification_denied, verification_not_supported_by_issuer, verification_stopped_by_issuer, card_failed, card_invalid, card_address_mismatch, card_zip_mismatch, card_cvv_invalid, card_expired, card_limit_violated, card_not_honored, card_cvv_required, credit_card_not_allowed, card_account_ineligible, card_network_unsupported]\'
 * @export
 * @enum {string}
 */

export const VerificationErrorCode = {
    VerificationFailed: 'verification_failed',
    VerificationFraudDetected: 'verification_fraud_detected',
    VerificationDenied: 'verification_denied',
    VerificationNotSupportedByIssuer: 'verification_not_supported_by_issuer',
    VerificationStoppedByIssuer: 'verification_stopped_by_issuer',
    CardFailed: 'card_failed',
    CardInvalid: 'card_invalid',
    CardAddressMismatch: 'card_address_mismatch',
    CardZipMismatch: 'card_zip_mismatch',
    CardCvvInvalid: 'card_cvv_invalid',
    CardExpired: 'card_expired',
    CardLimitViolated: 'card_limit_violated',
    CardNotHonored: 'card_not_honored',
    CardCvvRequired: 'card_cvv_required',
    CreditCardNotAllowed: 'credit_card_not_allowed',
    CardAccountIneligible: 'card_account_ineligible',
    CardNetworkUnsupported: 'card_network_unsupported'
} as const;

export type VerificationErrorCode = typeof VerificationErrorCode[keyof typeof VerificationErrorCode];




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


import { CvvResults } from './cvv-results';
import { Eci } from './eci';
import { ThreeDSResult } from './three-dsresult';

/**
 * Indicates the status of the payment verification. This property will be present once the payment is confirmed.
 * @export
 * @interface PaymentVerificationResponse
 */
export interface PaymentVerificationResponse {
    /**
     * Status of the AVS check. Raw AVS response, expressed as an upper-case letter. `not_requested` indicates check was not made. `pending` is pending/processing.
     * @type {string}
     * @memberof PaymentVerificationResponse
     */
    'avs': string;
    /**
     * 
     * @type {CvvResults}
     * @memberof PaymentVerificationResponse
     */
    'cvv': CvvResults;
    /**
     * 
     * @type {ThreeDSResult}
     * @memberof PaymentVerificationResponse
     */
    'threeDSecure'?: ThreeDSResult;
    /**
     * 
     * @type {Eci}
     * @memberof PaymentVerificationResponse
     */
    'eci'?: Eci;
}


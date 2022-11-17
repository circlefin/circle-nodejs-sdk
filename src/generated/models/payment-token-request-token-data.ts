/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, Accounts, and Crypto Payments APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { ApplePayToken } from "./apple-pay-token";
// May contain unused imports in some cases
// @ts-ignore
import { ApplePayTokenHeader } from "./apple-pay-token-header";
// May contain unused imports in some cases
// @ts-ignore
import { GooglePayToken } from "./google-pay-token";

/**
 * @type PaymentTokenRequestTokenData
 * The token data
 * @export
 */
export type PaymentTokenRequestTokenData = ApplePayToken | GooglePayToken;

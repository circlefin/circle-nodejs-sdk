/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { CryptoPayoutCreationRequest } from "./crypto-payout-creation-request";
// May contain unused imports in some cases
// @ts-ignore
import { CryptoPayoutDestination } from "./crypto-payout-destination";
// May contain unused imports in some cases
// @ts-ignore
import { FiatPayoutCreationRequest } from "./fiat-payout-creation-request";
// May contain unused imports in some cases
// @ts-ignore
import { MetadataPayout } from "./metadata-payout";
// May contain unused imports in some cases
// @ts-ignore
import { Money } from "./money";
// May contain unused imports in some cases
// @ts-ignore
import { ToAmount } from "./to-amount";
// May contain unused imports in some cases
// @ts-ignore
import { TransferSourceWalletLocation } from "./transfer-source-wallet-location";

/**
 * @type CreatePayoutRequest
 * @export
 */
export type CreatePayoutRequest =
  | CryptoPayoutCreationRequest
  | FiatPayoutCreationRequest;

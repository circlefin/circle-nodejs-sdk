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

/**
 * A destination wallet location.
 * @export
 * @interface TransferDestinationWalletLocation
 */
export interface TransferDestinationWalletLocation {
  /**
   *
   * @type {string}
   * @memberof TransferDestinationWalletLocation
   */
  type: TransferDestinationWalletLocationTypeEnum;
  /**
   * The id of the wallet.
   * @type {string}
   * @memberof TransferDestinationWalletLocation
   */
  id: string;
  /**
   * An alphanumeric string which indicates the wallet address used to receive the transfer. Will only be set when the transfer source is a blockchain address.
   * @type {string}
   * @memberof TransferDestinationWalletLocation
   */
  address?: string;
  /**
   * The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
   * @type {string}
   * @memberof TransferDestinationWalletLocation
   */
  addressTag?: string | null;
}

export const TransferDestinationWalletLocationTypeEnum = {
  Wallet: "wallet"
} as const;

export type TransferDestinationWalletLocationTypeEnum =
  typeof TransferDestinationWalletLocationTypeEnum[keyof typeof TransferDestinationWalletLocationTypeEnum];

/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Chain } from "./chain";

/**
 * A destination blockchain address.
 * @export
 * @interface TransferDestinationBlockchainLocation
 */
export interface TransferDestinationBlockchainLocation {
  /**
   *
   * @type {string}
   * @memberof TransferDestinationBlockchainLocation
   */
  type: TransferDestinationBlockchainLocationTypeEnum;
  /**
   * An alphanumeric string representing a blockchain address. Will be in different formats for different chains. It is important to preserve the exact formatting and capitalization of the address.
   * @type {string}
   * @memberof TransferDestinationBlockchainLocation
   */
  address: string;
  /**
   * The secondary identifier for a blockchain address. An example of this is the memo field on the Stellar network, which can be text, id, or hash format.
   * @type {string}
   * @memberof TransferDestinationBlockchainLocation
   */
  addressTag?: string | null;
  /**
   *
   * @type {Chain}
   * @memberof TransferDestinationBlockchainLocation
   */
  chain: Chain;
}

export const TransferDestinationBlockchainLocationTypeEnum = {
  Blockchain: "blockchain"
} as const;

export type TransferDestinationBlockchainLocationTypeEnum =
  typeof TransferDestinationBlockchainLocationTypeEnum[keyof typeof TransferDestinationBlockchainLocationTypeEnum];

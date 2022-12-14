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
// May contain unused imports in some cases
// @ts-ignore
import { Identity } from "./identity";

/**
 * A source blockchain address.
 * @export
 * @interface TransferSourceBlockchainLocation
 */
export interface TransferSourceBlockchainLocation {
  /**
   *
   * @type {string}
   * @memberof TransferSourceBlockchainLocation
   */
  type: TransferSourceBlockchainLocationTypeEnum;
  /**
   *
   * @type {Chain}
   * @memberof TransferSourceBlockchainLocation
   */
  chain: Chain;
  /**
   *
   * @type {Array<Identity>}
   * @memberof TransferSourceBlockchainLocation
   */
  identities?: Array<Identity>;
}

export const TransferSourceBlockchainLocationTypeEnum = {
  Blockchain: "blockchain"
} as const;

export type TransferSourceBlockchainLocationTypeEnum =
  typeof TransferSourceBlockchainLocationTypeEnum[keyof typeof TransferSourceBlockchainLocationTypeEnum];

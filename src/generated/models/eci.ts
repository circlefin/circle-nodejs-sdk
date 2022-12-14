/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * ECI (electronic commerce indicator) value returned by Directory Servers (namely Visa, MasterCard, JCB, and American Express) indicating the outcome of authentication attempted on transactions enforced by 3DS.
 * @export
 * @enum {string}
 */

export const Eci = {
  _00: "00",
  _01: "01",
  _02: "02",
  _05: "05",
  _06: "06",
  _07: "07"
} as const;

export type Eci = typeof Eci[keyof typeof Eci];

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
 * Enumerated status of the check. `not_requested` indicates check was not made. `pass` indicates value is correct. `fail` indicates value is incorrect. `unavailable` indicates card issuer did not do the provided check. `pending` indicates check is pending/processing.
 * @export
 * @enum {string}
 */

export const CvvResults = {
  NotRequested: "not_requested",
  Pass: "pass",
  Fail: "fail",
  Unavailable: "unavailable",
  Pending: "pending"
} as const;

export type CvvResults = typeof CvvResults[keyof typeof CvvResults];
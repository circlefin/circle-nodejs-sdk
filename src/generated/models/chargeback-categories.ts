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
 * Enumerated category of the chargeback status codes based on the chargeback status code.
 * @export
 * @enum {string}
 */

export const ChargebackCategories = {
  CanceledRecurringPayment: "Canceled Recurring Payment",
  CustomerDispute: "Customer Dispute",
  Fraudulent: "Fraudulent",
  General: "General",
  ProcessingError: "Processing Error",
  NotDefined: "Not Defined"
} as const;

export type ChargebackCategories =
  typeof ChargebackCategories[keyof typeof ChargebackCategories];
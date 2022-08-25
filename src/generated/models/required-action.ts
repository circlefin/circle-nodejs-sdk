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
 * When the payment status is `action_required`, this object summarizes the required additional steps.
 * @export
 * @interface RequiredAction
 */
export interface RequiredAction {
  /**
   * The type of action that is required to proceed with the payment. Currently only one type is supported.
   * @type {string}
   * @memberof RequiredAction
   */
  type: RequiredActionTypeEnum;
  /**
   * The URL to bring the user to in order to complete the payment.
   * @type {string}
   * @memberof RequiredAction
   */
  redirectUrl: string;
}

export const RequiredActionTypeEnum = {
  ThreeDSecureRequired: "three_d_secure_required"
} as const;

export type RequiredActionTypeEnum =
  typeof RequiredActionTypeEnum[keyof typeof RequiredActionTypeEnum];

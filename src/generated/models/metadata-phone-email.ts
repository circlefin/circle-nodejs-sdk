/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 *
 * @export
 * @interface MetadataPhoneEmail
 */
export interface MetadataPhoneEmail {
  /**
   * Email of the user.
   * @type {string}
   * @memberof MetadataPhoneEmail
   */
  email: string;
  /**
   * Phone number of the user in E.164 format. We recommend using a library such as [libphonenumber](https://github.com/google/libphonenumber) to parse and validate phone numbers.
   * @type {string}
   * @memberof MetadataPhoneEmail
   */
  phoneNumber?: string;
}

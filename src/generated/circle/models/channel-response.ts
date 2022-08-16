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
 * 
 * @export
 * @interface ChannelResponse
 */
export interface ChannelResponse {
    /**
     * Unique system generated identifier for the entity.
     * @type {string}
     * @memberof ChannelResponse
     */
    'id'?: string;
    /**
     * Flag to indicate whether the channel is configured as default. At most one of the channels will have this flag set to true and the default channel is used when a payment request does not have the `channel` property set.
     * @type {boolean}
     * @memberof ChannelResponse
     */
    'default'?: boolean;
    /**
     * Descriptor that appears on cardholders\' bank statements for card payments submitted through this channel.
     * @type {string}
     * @memberof ChannelResponse
     */
    'cardDescriptor'?: string;
    /**
     * Descriptor that appears on end-users\' bank statements for ACH payments submitted through this channel.
     * @type {string}
     * @memberof ChannelResponse
     */
    'achDescriptor'?: string;
}


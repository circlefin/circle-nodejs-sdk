/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import globalAxios, {
  AxiosPromise,
  AxiosInstance,
  AxiosRequestConfig
} from "axios";
import { Configuration } from "../configuration";
// Some imports not used depending on template conditions
// @ts-ignore
import {
  DUMMY_BASE_URL,
  assertParamExists,
  setBearerAuthToObject,
  setSearchParams,
  serializeDataIfNeeded,
  toPathString,
  createRequestFunction
} from "../common";
// @ts-ignore
import {
  BASE_PATH,
  COLLECTION_FORMATS,
  RequestArgs,
  BaseAPI,
  RequiredError
} from "../base";
// @ts-ignore
import { BadRequest } from "../models";
// @ts-ignore
import { CreateSubscriptionResponse } from "../models";
// @ts-ignore
import { DeleteSubscriptionResponse } from "../models";
// @ts-ignore
import { LimitExceeded } from "../models";
// @ts-ignore
import { ListSubscriptionsResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { NotFound } from "../models";
// @ts-ignore
import { SubscriptionRequest } from "../models";
/**
 * SubscriptionsApi - axios parameter creator
 * @export
 */
export const SubscriptionsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Subscribe to receiving notifications at a given endpoint. The endpoint should be able to handle AWS SNS subscription requests. For more details see https://docs.aws.amazon.com/mobile/sdkforxamarin/developerguide/sns-send-http.html. Note, the sandbox environment allows a maximum of 3 active subscriptions; otherwise, this is limited to 1 active subscription and subsequent create requests will be rejected with a Limit Exceeded error.
     * @summary Create a notification subscription
     * @param {SubscriptionRequest} [subscriptionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscription: async (
      subscriptionRequest?: SubscriptionRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/notifications/subscriptions`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "POST",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      localVarHeaderParameter["Content-Type"] = "application/json";

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };
      localVarRequestOptions.data = serializeDataIfNeeded(
        subscriptionRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * To remove a subscription, all its subscription requests\' statuses must be either \'confirmed\', \'deleted\' or a combination of those. A subscription with at least one \'pending\' subscription request cannot be removed.
     * @summary Remove a notification subscription
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubscription: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("deleteSubscription", "id", id);
      const localVarPath = `/v1/notifications/subscriptions/{id}`.replace(
        `{${"id"}}`,
        encodeURIComponent(String(id))
      );
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "DELETE",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Retrieve a list of existing notification subscriptions with details.
     * @summary List all notification subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptions: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/notifications/subscriptions`;
      // use dummy base URL string because the URL constructor only accepts absolute URLs.
      const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }

      const localVarRequestOptions = {
        method: "GET",
        ...baseOptions,
        ...options
      };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      // authentication bearerAuth required
      // http bearer authentication required
      await setBearerAuthToObject(localVarHeaderParameter, configuration);

      setSearchParams(localVarUrlObj, localVarQueryParameter);
      let headersFromBaseOptions =
        baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = {
        ...localVarHeaderParameter,
        ...headersFromBaseOptions,
        ...options.headers
      };

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    }
  };
};

/**
 * SubscriptionsApi - functional programming interface
 * @export
 */
export const SubscriptionsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    SubscriptionsApiAxiosParamCreator(configuration);
  return {
    /**
     * Subscribe to receiving notifications at a given endpoint. The endpoint should be able to handle AWS SNS subscription requests. For more details see https://docs.aws.amazon.com/mobile/sdkforxamarin/developerguide/sns-send-http.html. Note, the sandbox environment allows a maximum of 3 active subscriptions; otherwise, this is limited to 1 active subscription and subsequent create requests will be rejected with a Limit Exceeded error.
     * @summary Create a notification subscription
     * @param {SubscriptionRequest} [subscriptionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSubscription(
      subscriptionRequest?: SubscriptionRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateSubscriptionResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createSubscription(
          subscriptionRequest,
          options
        );
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * To remove a subscription, all its subscription requests\' statuses must be either \'confirmed\', \'deleted\' or a combination of those. A subscription with at least one \'pending\' subscription request cannot be removed.
     * @summary Remove a notification subscription
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async deleteSubscription(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<DeleteSubscriptionResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.deleteSubscription(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Retrieve a list of existing notification subscriptions with details.
     * @summary List all notification subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listSubscriptions(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListSubscriptionsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listSubscriptions(options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    }
  };
};

/**
 * SubscriptionsApi - factory interface
 * @export
 */
export const SubscriptionsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SubscriptionsApiFp(configuration);
  return {
    /**
     * Subscribe to receiving notifications at a given endpoint. The endpoint should be able to handle AWS SNS subscription requests. For more details see https://docs.aws.amazon.com/mobile/sdkforxamarin/developerguide/sns-send-http.html. Note, the sandbox environment allows a maximum of 3 active subscriptions; otherwise, this is limited to 1 active subscription and subsequent create requests will be rejected with a Limit Exceeded error.
     * @summary Create a notification subscription
     * @param {SubscriptionRequest} [subscriptionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSubscription(
      subscriptionRequest?: SubscriptionRequest,
      options?: any
    ): AxiosPromise<CreateSubscriptionResponse> {
      return localVarFp
        .createSubscription(subscriptionRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * To remove a subscription, all its subscription requests\' statuses must be either \'confirmed\', \'deleted\' or a combination of those. A subscription with at least one \'pending\' subscription request cannot be removed.
     * @summary Remove a notification subscription
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    deleteSubscription(
      id: string,
      options?: any
    ): AxiosPromise<DeleteSubscriptionResponse> {
      return localVarFp
        .deleteSubscription(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Retrieve a list of existing notification subscriptions with details.
     * @summary List all notification subscriptions
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listSubscriptions(options?: any): AxiosPromise<ListSubscriptionsResponse> {
      return localVarFp
        .listSubscriptions(options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * SubscriptionsApi - object-oriented interface
 * @export
 * @class SubscriptionsApi
 * @extends {BaseAPI}
 */
export class SubscriptionsApi extends BaseAPI {
  /**
   * Subscribe to receiving notifications at a given endpoint. The endpoint should be able to handle AWS SNS subscription requests. For more details see https://docs.aws.amazon.com/mobile/sdkforxamarin/developerguide/sns-send-http.html. Note, the sandbox environment allows a maximum of 3 active subscriptions; otherwise, this is limited to 1 active subscription and subsequent create requests will be rejected with a Limit Exceeded error.
   * @summary Create a notification subscription
   * @param {SubscriptionRequest} [subscriptionRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApi
   */
  public createSubscription(
    subscriptionRequest?: SubscriptionRequest,
    options?: AxiosRequestConfig
  ) {
    return SubscriptionsApiFp(this.configuration)
      .createSubscription(subscriptionRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * To remove a subscription, all its subscription requests\' statuses must be either \'confirmed\', \'deleted\' or a combination of those. A subscription with at least one \'pending\' subscription request cannot be removed.
   * @summary Remove a notification subscription
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApi
   */
  public deleteSubscription(id: string, options?: AxiosRequestConfig) {
    return SubscriptionsApiFp(this.configuration)
      .deleteSubscription(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Retrieve a list of existing notification subscriptions with details.
   * @summary List all notification subscriptions
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SubscriptionsApi
   */
  public listSubscriptions(options?: AxiosRequestConfig) {
    return SubscriptionsApiFp(this.configuration)
      .listSubscriptions(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

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
import { CheckoutSessionCreationRequest } from "../models";
// @ts-ignore
import { CreateCheckoutSessionResponse } from "../models";
// @ts-ignore
import { ExtendCheckoutSessionRequest } from "../models";
// @ts-ignore
import { ExtendCheckoutSessionResponse } from "../models";
// @ts-ignore
import { GetCheckoutSessionResponse } from "../models";
// @ts-ignore
import { ListCheckoutSessionsResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { NotFound } from "../models";
/**
 * CheckoutSessionsApi - axios parameter creator
 * @export
 */
export const CheckoutSessionsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create a checkout session
     * @param {CheckoutSessionCreationRequest} [checkoutSessionCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCheckoutSession: async (
      checkoutSessionCreationRequest?: CheckoutSessionCreationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/checkoutSessions`;
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
        checkoutSessionCreationRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary Extend a checkout session
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {ExtendCheckoutSessionRequest} [extendCheckoutSessionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    extendCheckoutSession: async (
      id: string,
      extendCheckoutSessionRequest?: ExtendCheckoutSessionRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("extendCheckoutSession", "id", id);
      const localVarPath = `/v1/checkoutSessions/{id}/extend`.replace(
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
        extendCheckoutSessionRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     *
     * @summary Get a checkout session
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCheckoutSession: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getCheckoutSession", "id", id);
      const localVarPath = `/v1/checkoutSessions/{id}`.replace(
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
    },
    /**
     *
     * @summary List all checkout sessions
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCheckoutSessions: async (
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/checkoutSessions`;
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

      if (from !== undefined) {
        localVarQueryParameter["from"] =
          (from as any) instanceof Date ? (from as any).toISOString() : from;
      }

      if (to !== undefined) {
        localVarQueryParameter["to"] =
          (to as any) instanceof Date ? (to as any).toISOString() : to;
      }

      if (pageBefore !== undefined) {
        localVarQueryParameter["pageBefore"] = pageBefore;
      }

      if (pageAfter !== undefined) {
        localVarQueryParameter["pageAfter"] = pageAfter;
      }

      if (pageSize !== undefined) {
        localVarQueryParameter["pageSize"] = pageSize;
      }

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
 * CheckoutSessionsApi - functional programming interface
 * @export
 */
export const CheckoutSessionsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    CheckoutSessionsApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Create a checkout session
     * @param {CheckoutSessionCreationRequest} [checkoutSessionCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCheckoutSession(
      checkoutSessionCreationRequest?: CheckoutSessionCreationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateCheckoutSessionResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCheckoutSession(
          checkoutSessionCreationRequest,
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
     *
     * @summary Extend a checkout session
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {ExtendCheckoutSessionRequest} [extendCheckoutSessionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async extendCheckoutSession(
      id: string,
      extendCheckoutSessionRequest?: ExtendCheckoutSessionRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ExtendCheckoutSessionResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.extendCheckoutSession(
          id,
          extendCheckoutSessionRequest,
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
     *
     * @summary Get a checkout session
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getCheckoutSession(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetCheckoutSessionResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getCheckoutSession(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     *
     * @summary List all checkout sessions
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listCheckoutSessions(
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListCheckoutSessionsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listCheckoutSessions(
          from,
          to,
          pageBefore,
          pageAfter,
          pageSize,
          options
        );
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
 * CheckoutSessionsApi - factory interface
 * @export
 */
export const CheckoutSessionsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = CheckoutSessionsApiFp(configuration);
  return {
    /**
     *
     * @summary Create a checkout session
     * @param {CheckoutSessionCreationRequest} [checkoutSessionCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCheckoutSession(
      checkoutSessionCreationRequest?: CheckoutSessionCreationRequest,
      options?: any
    ): AxiosPromise<CreateCheckoutSessionResponse> {
      return localVarFp
        .createCheckoutSession(checkoutSessionCreationRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Extend a checkout session
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {ExtendCheckoutSessionRequest} [extendCheckoutSessionRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    extendCheckoutSession(
      id: string,
      extendCheckoutSessionRequest?: ExtendCheckoutSessionRequest,
      options?: any
    ): AxiosPromise<ExtendCheckoutSessionResponse> {
      return localVarFp
        .extendCheckoutSession(id, extendCheckoutSessionRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a checkout session
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getCheckoutSession(
      id: string,
      options?: any
    ): AxiosPromise<GetCheckoutSessionResponse> {
      return localVarFp
        .getCheckoutSession(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all checkout sessions
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listCheckoutSessions(
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: any
    ): AxiosPromise<ListCheckoutSessionsResponse> {
      return localVarFp
        .listCheckoutSessions(
          from,
          to,
          pageBefore,
          pageAfter,
          pageSize,
          options
        )
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * CheckoutSessionsApi - object-oriented interface
 * @export
 * @class CheckoutSessionsApi
 * @extends {BaseAPI}
 */
export class CheckoutSessionsApi extends BaseAPI {
  /**
   *
   * @summary Create a checkout session
   * @param {CheckoutSessionCreationRequest} [checkoutSessionCreationRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CheckoutSessionsApi
   */
  public createCheckoutSession(
    checkoutSessionCreationRequest?: CheckoutSessionCreationRequest,
    options?: AxiosRequestConfig
  ) {
    return CheckoutSessionsApiFp(this.configuration)
      .createCheckoutSession(checkoutSessionCreationRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Extend a checkout session
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {ExtendCheckoutSessionRequest} [extendCheckoutSessionRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CheckoutSessionsApi
   */
  public extendCheckoutSession(
    id: string,
    extendCheckoutSessionRequest?: ExtendCheckoutSessionRequest,
    options?: AxiosRequestConfig
  ) {
    return CheckoutSessionsApiFp(this.configuration)
      .extendCheckoutSession(id, extendCheckoutSessionRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a checkout session
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CheckoutSessionsApi
   */
  public getCheckoutSession(id: string, options?: AxiosRequestConfig) {
    return CheckoutSessionsApiFp(this.configuration)
      .getCheckoutSession(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary List all checkout sessions
   * @param {string} [from] Queries items created since the specified date-time (inclusive).
   * @param {string} [to] Queries items created before the specified date-time (inclusive).
   * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
   * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
   * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof CheckoutSessionsApi
   */
  public listCheckoutSessions(
    from?: string,
    to?: string,
    pageBefore?: string,
    pageAfter?: string,
    pageSize?: number,
    options?: AxiosRequestConfig
  ) {
    return CheckoutSessionsApiFp(this.configuration)
      .listCheckoutSessions(from, to, pageBefore, pageAfter, pageSize, options)
      .then((request) => request(this.axios, this.basePath));
  }
}
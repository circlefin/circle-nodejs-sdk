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
import { BusinessTransferCreationRequest } from "../models";
// @ts-ignore
import { CreateBusinessTransferResponse } from "../models";
// @ts-ignore
import { GetBusinessTransferResponse } from "../models";
// @ts-ignore
import { ListBusinessTransfersResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
/**
 * TransfersApi - axios parameter creator
 * @export
 */
export const TransfersApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * A transfer can be made from an existing business account to a blockchain location.
     * @summary Create a transfer
     * @param {BusinessTransferCreationRequest} [businessTransferCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessTransfer: async (
      businessTransferCreationRequest?: BusinessTransferCreationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/transfers`;
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
        businessTransferCreationRequest,
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
     * @summary Get a transfer
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessTransfer: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getBusinessTransfer", "id", id);
      const localVarPath = `/v1/businessAccount/transfers/{id}`.replace(
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
     * Searches for transfers from your business account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
     * @summary List all transfers
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBusinessTransfers: async (
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/transfers`;
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
 * TransfersApi - functional programming interface
 * @export
 */
export const TransfersApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    TransfersApiAxiosParamCreator(configuration);
  return {
    /**
     * A transfer can be made from an existing business account to a blockchain location.
     * @summary Create a transfer
     * @param {BusinessTransferCreationRequest} [businessTransferCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createBusinessTransfer(
      businessTransferCreationRequest?: BusinessTransferCreationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateBusinessTransferResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createBusinessTransfer(
          businessTransferCreationRequest,
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
     * @summary Get a transfer
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBusinessTransfer(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetBusinessTransferResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBusinessTransfer(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Searches for transfers from your business account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
     * @summary List all transfers
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listBusinessTransfers(
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
      ) => AxiosPromise<ListBusinessTransfersResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listBusinessTransfers(
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
 * TransfersApi - factory interface
 * @export
 */
export const TransfersApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = TransfersApiFp(configuration);
  return {
    /**
     * A transfer can be made from an existing business account to a blockchain location.
     * @summary Create a transfer
     * @param {BusinessTransferCreationRequest} [businessTransferCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessTransfer(
      businessTransferCreationRequest?: BusinessTransferCreationRequest,
      options?: any
    ): AxiosPromise<CreateBusinessTransferResponse> {
      return localVarFp
        .createBusinessTransfer(businessTransferCreationRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a transfer
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessTransfer(
      id: string,
      options?: any
    ): AxiosPromise<GetBusinessTransferResponse> {
      return localVarFp
        .getBusinessTransfer(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Searches for transfers from your business account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
     * @summary List all transfers
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBusinessTransfers(
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: any
    ): AxiosPromise<ListBusinessTransfersResponse> {
      return localVarFp
        .listBusinessTransfers(
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
 * TransfersApi - object-oriented interface
 * @export
 * @class TransfersApi
 * @extends {BaseAPI}
 */
export class TransfersApi extends BaseAPI {
  /**
   * A transfer can be made from an existing business account to a blockchain location.
   * @summary Create a transfer
   * @param {BusinessTransferCreationRequest} [businessTransferCreationRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransfersApi
   */
  public createBusinessTransfer(
    businessTransferCreationRequest?: BusinessTransferCreationRequest,
    options?: AxiosRequestConfig
  ) {
    return TransfersApiFp(this.configuration)
      .createBusinessTransfer(businessTransferCreationRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a transfer
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransfersApi
   */
  public getBusinessTransfer(id: string, options?: AxiosRequestConfig) {
    return TransfersApiFp(this.configuration)
      .getBusinessTransfer(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Searches for transfers from your business account. If the date parameters are omitted, returns the most recent transfers. This endpoint returns up to 50 transfers in descending chronological order or pageSize, if provided.
   * @summary List all transfers
   * @param {string} [from] Queries items created since the specified date-time (inclusive).
   * @param {string} [to] Queries items created before the specified date-time (inclusive).
   * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
   * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
   * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof TransfersApi
   */
  public listBusinessTransfers(
    from?: string,
    to?: string,
    pageBefore?: string,
    pageAfter?: string,
    pageSize?: number,
    options?: AxiosRequestConfig
  ) {
    return TransfersApiFp(this.configuration)
      .listBusinessTransfers(from, to, pageBefore, pageAfter, pageSize, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

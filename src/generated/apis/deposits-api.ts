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
import { CreateSenPaymentResponse } from "../models";
// @ts-ignore
import { MockSenPaymentRequest } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { SearchBusinessAccountDepositsResponse } from "../models";
/**
 * DepositsApi - axios parameter creator
 * @export
 */
export const DepositsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * In the sandbox environment, initiate a mock SEN transfer that mimics the behavior of funds sent through the Silvergate SEN account linked to master wallet.
     * @summary Create a mock Silvergate SEN payment
     * @param {MockSenPaymentRequest} [mockSenPaymentRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSenPayment: async (
      mockSenPaymentRequest?: MockSenPaymentRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/mocks/payments/sen`;
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
        mockSenPaymentRequest,
        localVarRequestOptions,
        configuration
      );

      return {
        url: toPathString(localVarUrlObj),
        options: localVarRequestOptions
      };
    },
    /**
     * Searches for deposits sent to your business account. If the date parameters are omitted, returns the most recent deposits. This endpoint returns up to 50 deposits in descending chronological order or pageSize, if provided.
     * @summary List all deposits
     * @param {'wire'} [type] Unique identifier for the deposit type. Filters results to fetch deposits made by this specific type.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchBusinessAccountDeposits: async (
      type?: "wire",
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/deposits`;
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

      if (type !== undefined) {
        localVarQueryParameter["type"] = type;
      }

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
 * DepositsApi - functional programming interface
 * @export
 */
export const DepositsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = DepositsApiAxiosParamCreator(configuration);
  return {
    /**
     * In the sandbox environment, initiate a mock SEN transfer that mimics the behavior of funds sent through the Silvergate SEN account linked to master wallet.
     * @summary Create a mock Silvergate SEN payment
     * @param {MockSenPaymentRequest} [mockSenPaymentRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSenPayment(
      mockSenPaymentRequest?: MockSenPaymentRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateSenPaymentResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createSenPayment(
          mockSenPaymentRequest,
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
     * Searches for deposits sent to your business account. If the date parameters are omitted, returns the most recent deposits. This endpoint returns up to 50 deposits in descending chronological order or pageSize, if provided.
     * @summary List all deposits
     * @param {'wire'} [type] Unique identifier for the deposit type. Filters results to fetch deposits made by this specific type.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async searchBusinessAccountDeposits(
      type?: "wire",
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
      ) => AxiosPromise<SearchBusinessAccountDepositsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.searchBusinessAccountDeposits(
          type,
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
 * DepositsApi - factory interface
 * @export
 */
export const DepositsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = DepositsApiFp(configuration);
  return {
    /**
     * In the sandbox environment, initiate a mock SEN transfer that mimics the behavior of funds sent through the Silvergate SEN account linked to master wallet.
     * @summary Create a mock Silvergate SEN payment
     * @param {MockSenPaymentRequest} [mockSenPaymentRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSenPayment(
      mockSenPaymentRequest?: MockSenPaymentRequest,
      options?: any
    ): AxiosPromise<CreateSenPaymentResponse> {
      return localVarFp
        .createSenPayment(mockSenPaymentRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Searches for deposits sent to your business account. If the date parameters are omitted, returns the most recent deposits. This endpoint returns up to 50 deposits in descending chronological order or pageSize, if provided.
     * @summary List all deposits
     * @param {'wire'} [type] Unique identifier for the deposit type. Filters results to fetch deposits made by this specific type.
     * @param {string} [from] Queries items created since the specified date-time (inclusive).
     * @param {string} [to] Queries items created before the specified date-time (inclusive).
     * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
     * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
     * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    searchBusinessAccountDeposits(
      type?: "wire",
      from?: string,
      to?: string,
      pageBefore?: string,
      pageAfter?: string,
      pageSize?: number,
      options?: any
    ): AxiosPromise<SearchBusinessAccountDepositsResponse> {
      return localVarFp
        .searchBusinessAccountDeposits(
          type,
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
 * DepositsApi - object-oriented interface
 * @export
 * @class DepositsApi
 * @extends {BaseAPI}
 */
export class DepositsApi extends BaseAPI {
  /**
   * In the sandbox environment, initiate a mock SEN transfer that mimics the behavior of funds sent through the Silvergate SEN account linked to master wallet.
   * @summary Create a mock Silvergate SEN payment
   * @param {MockSenPaymentRequest} [mockSenPaymentRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DepositsApi
   */
  public createSenPayment(
    mockSenPaymentRequest?: MockSenPaymentRequest,
    options?: AxiosRequestConfig
  ) {
    return DepositsApiFp(this.configuration)
      .createSenPayment(mockSenPaymentRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Searches for deposits sent to your business account. If the date parameters are omitted, returns the most recent deposits. This endpoint returns up to 50 deposits in descending chronological order or pageSize, if provided.
   * @summary List all deposits
   * @param {'wire'} [type] Unique identifier for the deposit type. Filters results to fetch deposits made by this specific type.
   * @param {string} [from] Queries items created since the specified date-time (inclusive).
   * @param {string} [to] Queries items created before the specified date-time (inclusive).
   * @param {string} [pageBefore] A collection ID value used for pagination.  It marks the exclusive end of a page. When provided, the collection resource will return the next &#x60;n&#x60; items before the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageAfter.
   * @param {string} [pageAfter] A collection ID value used for pagination.  It marks the exclusive begin of a page. When provided, the collection resource will return the next &#x60;n&#x60; items after the id, with &#x60;n&#x60; being specified by &#x60;pageSize&#x60;.  The items will be returned in the natural order of the collection.  The resource will return the first page if neither &#x60;pageAfter&#x60; nor &#x60;pageBefore&#x60; are specified.  SHOULD NOT be used in conjuction with pageBefore.
   * @param {number} [pageSize] Limits the number of items to be returned.  Some collections have a strict upper bound that will disregard this value. In case the specified value is higher than the allowed limit, the collection limit will be used.  If avoided, the collection will determine the page size itself.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof DepositsApi
   */
  public searchBusinessAccountDeposits(
    type?: "wire",
    from?: string,
    to?: string,
    pageBefore?: string,
    pageAfter?: string,
    pageSize?: number,
    options?: AxiosRequestConfig
  ) {
    return DepositsApiFp(this.configuration)
      .searchBusinessAccountDeposits(
        type,
        from,
        to,
        pageBefore,
        pageAfter,
        pageSize,
        options
      )
      .then((request) => request(this.axios, this.basePath));
  }
}

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
import { GetStablecoinsResponse } from "../models";
// @ts-ignore
import { LimitExceeded } from "../models";
/**
 * StablecoinsApi - axios parameter creator
 * @export
 */
export const StablecoinsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     * Retrieves total circulating supply for supported stablecoins across all chains. This endpoint is rate limited to one call per minute (based on IP).
     * @summary List all stablecoins
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStablecoins: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/stablecoins`;
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
 * StablecoinsApi - functional programming interface
 * @export
 */
export const StablecoinsApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator =
    StablecoinsApiAxiosParamCreator(configuration);
  return {
    /**
     * Retrieves total circulating supply for supported stablecoins across all chains. This endpoint is rate limited to one call per minute (based on IP).
     * @summary List all stablecoins
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getStablecoins(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetStablecoinsResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getStablecoins(
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
 * StablecoinsApi - factory interface
 * @export
 */
export const StablecoinsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = StablecoinsApiFp(configuration);
  return {
    /**
     * Retrieves total circulating supply for supported stablecoins across all chains. This endpoint is rate limited to one call per minute (based on IP).
     * @summary List all stablecoins
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getStablecoins(options?: any): AxiosPromise<GetStablecoinsResponse> {
      return localVarFp
        .getStablecoins(options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * StablecoinsApi - object-oriented interface
 * @export
 * @class StablecoinsApi
 * @extends {BaseAPI}
 */
export class StablecoinsApi extends BaseAPI {
  /**
   * Retrieves total circulating supply for supported stablecoins across all chains. This endpoint is rate limited to one call per minute (based on IP).
   * @summary List all stablecoins
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof StablecoinsApi
   */
  public getStablecoins(options?: AxiosRequestConfig) {
    return StablecoinsApiFp(this.configuration)
      .getStablecoins(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

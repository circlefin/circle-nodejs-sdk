/* tslint:disable */
/* eslint-disable */
/**
 * All Circle APIs
 * Circle\'s General, Core Functionality, Payments, Payouts, and Accounts APIs bundled into one OpenAPI Specification.
 *
 * The version of the OpenAPI document: 1.0.3
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
import { CreateBusinessSenAccountResponse } from "../models";
// @ts-ignore
import { GetBusinessSenAccountInstructionsResponse } from "../models";
// @ts-ignore
import { GetBusinessSenAccountResponse } from "../models";
// @ts-ignore
import { ListBusinessSenAccountsResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { NotFound } from "../models";
// @ts-ignore
import { SenFiatAccountCreationRequest } from "../models";
/**
 * SENApi - axios parameter creator
 * @export
 */
export const SENApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create a Silvergate SEN bank account (BETA)
     * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessSenAccount: async (
      senFiatAccountCreationRequest?: SenFiatAccountCreationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/banks/sen`;
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
        senFiatAccountCreationRequest,
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
     * @summary Get a Silvergate SEN bank account (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessSenAccount: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getBusinessSenAccount", "id", id);
      const localVarPath = `/v1/businessAccount/banks/sen/{id}`.replace(
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
     * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
     * @summary Get Silvergate SEN instructions (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessSenAccountInstructions: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getBusinessSenAccountInstructions", "id", id);
      const localVarPath =
        `/v1/businessAccount/banks/sen/{id}/instructions`.replace(
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
     * @summary List all Silvergate SEN bank accounts (BETA).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBusinessSenAccounts: async (
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/businessAccount/banks/sen`;
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
 * SENApi - functional programming interface
 * @export
 */
export const SENApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SENApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Create a Silvergate SEN bank account (BETA)
     * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createBusinessSenAccount(
      senFiatAccountCreationRequest?: SenFiatAccountCreationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateBusinessSenAccountResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createBusinessSenAccount(
          senFiatAccountCreationRequest,
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
     * @summary Get a Silvergate SEN bank account (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBusinessSenAccount(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetBusinessSenAccountResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBusinessSenAccount(id, options);
      return createRequestFunction(
        localVarAxiosArgs,
        globalAxios,
        BASE_PATH,
        configuration
      );
    },
    /**
     * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
     * @summary Get Silvergate SEN instructions (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getBusinessSenAccountInstructions(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetBusinessSenAccountInstructionsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getBusinessSenAccountInstructions(
          id,
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
     * @summary List all Silvergate SEN bank accounts (BETA).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async listBusinessSenAccounts(
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<ListBusinessSenAccountsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.listBusinessSenAccounts(options);
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
 * SENApi - factory interface
 * @export
 */
export const SENApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SENApiFp(configuration);
  return {
    /**
     *
     * @summary Create a Silvergate SEN bank account (BETA)
     * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createBusinessSenAccount(
      senFiatAccountCreationRequest?: SenFiatAccountCreationRequest,
      options?: any
    ): AxiosPromise<CreateBusinessSenAccountResponse> {
      return localVarFp
        .createBusinessSenAccount(senFiatAccountCreationRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a Silvergate SEN bank account (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessSenAccount(
      id: string,
      options?: any
    ): AxiosPromise<GetBusinessSenAccountResponse> {
      return localVarFp
        .getBusinessSenAccount(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
     * @summary Get Silvergate SEN instructions (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getBusinessSenAccountInstructions(
      id: string,
      options?: any
    ): AxiosPromise<GetBusinessSenAccountInstructionsResponse> {
      return localVarFp
        .getBusinessSenAccountInstructions(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary List all Silvergate SEN bank accounts (BETA).
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    listBusinessSenAccounts(
      options?: any
    ): AxiosPromise<ListBusinessSenAccountsResponse> {
      return localVarFp
        .listBusinessSenAccounts(options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * SENApi - object-oriented interface
 * @export
 * @class SENApi
 * @extends {BaseAPI}
 */
export class SENApi extends BaseAPI {
  /**
   *
   * @summary Create a Silvergate SEN bank account (BETA)
   * @param {SenFiatAccountCreationRequest} [senFiatAccountCreationRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SENApi
   */
  public createBusinessSenAccount(
    senFiatAccountCreationRequest?: SenFiatAccountCreationRequest,
    options?: AxiosRequestConfig
  ) {
    return SENApiFp(this.configuration)
      .createBusinessSenAccount(senFiatAccountCreationRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a Silvergate SEN bank account (BETA)
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SENApi
   */
  public getBusinessSenAccount(id: string, options?: AxiosRequestConfig) {
    return SENApiFp(this.configuration)
      .getBusinessSenAccount(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the Silvergate SEN transfer instructions into the Circle bank account given your bank account id (BETA).
   * @summary Get Silvergate SEN instructions (BETA)
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SENApi
   */
  public getBusinessSenAccountInstructions(
    id: string,
    options?: AxiosRequestConfig
  ) {
    return SENApiFp(this.configuration)
      .getBusinessSenAccountInstructions(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary List all Silvergate SEN bank accounts (BETA).
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SENApi
   */
  public listBusinessSenAccounts(options?: AxiosRequestConfig) {
    return SENApiFp(this.configuration)
      .listBusinessSenAccounts(options)
      .then((request) => request(this.axios, this.basePath));
  }
}

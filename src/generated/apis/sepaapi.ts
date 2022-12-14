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
import { CreateSepaAccountResponse } from "../models";
// @ts-ignore
import { GetSepaAccountInstructionsResponse } from "../models";
// @ts-ignore
import { GetSepaAccountResponse } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { NotFound } from "../models";
// @ts-ignore
import { SepaCreationRequest } from "../models";
/**
 * SEPAApi - axios parameter creator
 * @export
 */
export const SEPAApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create a SEPA bank account (BETA)
     * @param {SepaCreationRequest} [sepaCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSepaAccount: async (
      sepaCreationRequest?: SepaCreationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/banks/sepa`;
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
        sepaCreationRequest,
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
     * @summary Get a SEPA bank account (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSepaAccount: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getSepaAccount", "id", id);
      const localVarPath = `/v1/banks/sepa/{id}`.replace(
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
     * Get the SEPA transfer instructions into the Circle bank account given your bank account id (BETA).
     * @summary Get SEPA instructions (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSepaAccountInstructions: async (
      id: string,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'id' is not null or undefined
      assertParamExists("getSepaAccountInstructions", "id", id);
      const localVarPath = `/v1/banks/sepa/{id}/instructions`.replace(
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
    }
  };
};

/**
 * SEPAApi - functional programming interface
 * @export
 */
export const SEPAApiFp = function (configuration?: Configuration) {
  const localVarAxiosParamCreator = SEPAApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Create a SEPA bank account (BETA)
     * @param {SepaCreationRequest} [sepaCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createSepaAccount(
      sepaCreationRequest?: SepaCreationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateSepaAccountResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createSepaAccount(
          sepaCreationRequest,
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
     * @summary Get a SEPA bank account (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSepaAccount(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetSepaAccountResponse>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.getSepaAccount(
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
     * Get the SEPA transfer instructions into the Circle bank account given your bank account id (BETA).
     * @summary Get SEPA instructions (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async getSepaAccountInstructions(
      id: string,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<GetSepaAccountInstructionsResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.getSepaAccountInstructions(id, options);
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
 * SEPAApi - factory interface
 * @export
 */
export const SEPAApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = SEPAApiFp(configuration);
  return {
    /**
     *
     * @summary Create a SEPA bank account (BETA)
     * @param {SepaCreationRequest} [sepaCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createSepaAccount(
      sepaCreationRequest?: SepaCreationRequest,
      options?: any
    ): AxiosPromise<CreateSepaAccountResponse> {
      return localVarFp
        .createSepaAccount(sepaCreationRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a SEPA bank account (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSepaAccount(
      id: string,
      options?: any
    ): AxiosPromise<GetSepaAccountResponse> {
      return localVarFp
        .getSepaAccount(id, options)
        .then((request) => request(axios, basePath));
    },
    /**
     * Get the SEPA transfer instructions into the Circle bank account given your bank account id (BETA).
     * @summary Get SEPA instructions (BETA)
     * @param {string} id Universally unique identifier (UUID v4) of a resource.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    getSepaAccountInstructions(
      id: string,
      options?: any
    ): AxiosPromise<GetSepaAccountInstructionsResponse> {
      return localVarFp
        .getSepaAccountInstructions(id, options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * SEPAApi - object-oriented interface
 * @export
 * @class SEPAApi
 * @extends {BaseAPI}
 */
export class SEPAApi extends BaseAPI {
  /**
   *
   * @summary Create a SEPA bank account (BETA)
   * @param {SepaCreationRequest} [sepaCreationRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SEPAApi
   */
  public createSepaAccount(
    sepaCreationRequest?: SepaCreationRequest,
    options?: AxiosRequestConfig
  ) {
    return SEPAApiFp(this.configuration)
      .createSepaAccount(sepaCreationRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a SEPA bank account (BETA)
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SEPAApi
   */
  public getSepaAccount(id: string, options?: AxiosRequestConfig) {
    return SEPAApiFp(this.configuration)
      .getSepaAccount(id, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   * Get the SEPA transfer instructions into the Circle bank account given your bank account id (BETA).
   * @summary Get SEPA instructions (BETA)
   * @param {string} id Universally unique identifier (UUID v4) of a resource.
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof SEPAApi
   */
  public getSepaAccountInstructions(id: string, options?: AxiosRequestConfig) {
    return SEPAApiFp(this.configuration)
      .getSepaAccountInstructions(id, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

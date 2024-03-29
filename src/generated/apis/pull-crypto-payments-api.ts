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
import { CreateCryptoPaymentResponse } from "../models";
// @ts-ignore
import { CreateCryptoPaymentResponse1 } from "../models";
// @ts-ignore
import { CryptoPaymentCreationRequest } from "../models";
// @ts-ignore
import { NotAuthorized } from "../models";
// @ts-ignore
import { NotFound } from "../models";
/**
 * PullCryptoPaymentsApi - axios parameter creator
 * @export
 */
export const PullCryptoPaymentsApiAxiosParamCreator = function (
  configuration?: Configuration
) {
  return {
    /**
     *
     * @summary Create a crypto payment
     * @param {CryptoPaymentCreationRequest} [cryptoPaymentCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCryptoPayment: async (
      cryptoPaymentCreationRequest?: CryptoPaymentCreationRequest,
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      const localVarPath = `/v1/payments/crypto`;
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
        cryptoPaymentCreationRequest,
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
     * @summary Get a typed message for signing
     * @param {string} endUserAddress User wallet address
     * @param {string} paymentIntentId Payment intent id which is from the create payment intent endpoint response
     * @param {string} [amount]
     * @param {'USD'} [currency] Only support USD at the moment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    presign: async (
      endUserAddress: string,
      paymentIntentId: string,
      amount?: string,
      currency?: "USD",
      options: AxiosRequestConfig = {}
    ): Promise<RequestArgs> => {
      // verify required parameter 'endUserAddress' is not null or undefined
      assertParamExists("presign", "endUserAddress", endUserAddress);
      // verify required parameter 'paymentIntentId' is not null or undefined
      assertParamExists("presign", "paymentIntentId", paymentIntentId);
      const localVarPath = `/v1/payments/presign`;
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

      if (endUserAddress !== undefined) {
        localVarQueryParameter["endUserAddress"] = endUserAddress;
      }

      if (paymentIntentId !== undefined) {
        localVarQueryParameter["paymentIntentId"] = paymentIntentId;
      }

      if (amount !== undefined) {
        localVarQueryParameter["amount"] = amount;
      }

      if (currency !== undefined) {
        localVarQueryParameter["currency"] = currency;
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
 * PullCryptoPaymentsApi - functional programming interface
 * @export
 */
export const PullCryptoPaymentsApiFp = function (
  configuration?: Configuration
) {
  const localVarAxiosParamCreator =
    PullCryptoPaymentsApiAxiosParamCreator(configuration);
  return {
    /**
     *
     * @summary Create a crypto payment
     * @param {CryptoPaymentCreationRequest} [cryptoPaymentCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async createCryptoPayment(
      cryptoPaymentCreationRequest?: CryptoPaymentCreationRequest,
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateCryptoPaymentResponse>
    > {
      const localVarAxiosArgs =
        await localVarAxiosParamCreator.createCryptoPayment(
          cryptoPaymentCreationRequest,
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
     * @summary Get a typed message for signing
     * @param {string} endUserAddress User wallet address
     * @param {string} paymentIntentId Payment intent id which is from the create payment intent endpoint response
     * @param {string} [amount]
     * @param {'USD'} [currency] Only support USD at the moment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async presign(
      endUserAddress: string,
      paymentIntentId: string,
      amount?: string,
      currency?: "USD",
      options?: AxiosRequestConfig
    ): Promise<
      (
        axios?: AxiosInstance,
        basePath?: string
      ) => AxiosPromise<CreateCryptoPaymentResponse1>
    > {
      const localVarAxiosArgs = await localVarAxiosParamCreator.presign(
        endUserAddress,
        paymentIntentId,
        amount,
        currency,
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
 * PullCryptoPaymentsApi - factory interface
 * @export
 */
export const PullCryptoPaymentsApiFactory = function (
  configuration?: Configuration,
  basePath?: string,
  axios?: AxiosInstance
) {
  const localVarFp = PullCryptoPaymentsApiFp(configuration);
  return {
    /**
     *
     * @summary Create a crypto payment
     * @param {CryptoPaymentCreationRequest} [cryptoPaymentCreationRequest]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    createCryptoPayment(
      cryptoPaymentCreationRequest?: CryptoPaymentCreationRequest,
      options?: any
    ): AxiosPromise<CreateCryptoPaymentResponse> {
      return localVarFp
        .createCryptoPayment(cryptoPaymentCreationRequest, options)
        .then((request) => request(axios, basePath));
    },
    /**
     *
     * @summary Get a typed message for signing
     * @param {string} endUserAddress User wallet address
     * @param {string} paymentIntentId Payment intent id which is from the create payment intent endpoint response
     * @param {string} [amount]
     * @param {'USD'} [currency] Only support USD at the moment
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    presign(
      endUserAddress: string,
      paymentIntentId: string,
      amount?: string,
      currency?: "USD",
      options?: any
    ): AxiosPromise<CreateCryptoPaymentResponse1> {
      return localVarFp
        .presign(endUserAddress, paymentIntentId, amount, currency, options)
        .then((request) => request(axios, basePath));
    }
  };
};

/**
 * PullCryptoPaymentsApi - object-oriented interface
 * @export
 * @class PullCryptoPaymentsApi
 * @extends {BaseAPI}
 */
export class PullCryptoPaymentsApi extends BaseAPI {
  /**
   *
   * @summary Create a crypto payment
   * @param {CryptoPaymentCreationRequest} [cryptoPaymentCreationRequest]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PullCryptoPaymentsApi
   */
  public createCryptoPayment(
    cryptoPaymentCreationRequest?: CryptoPaymentCreationRequest,
    options?: AxiosRequestConfig
  ) {
    return PullCryptoPaymentsApiFp(this.configuration)
      .createCryptoPayment(cryptoPaymentCreationRequest, options)
      .then((request) => request(this.axios, this.basePath));
  }

  /**
   *
   * @summary Get a typed message for signing
   * @param {string} endUserAddress User wallet address
   * @param {string} paymentIntentId Payment intent id which is from the create payment intent endpoint response
   * @param {string} [amount]
   * @param {'USD'} [currency] Only support USD at the moment
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof PullCryptoPaymentsApi
   */
  public presign(
    endUserAddress: string,
    paymentIntentId: string,
    amount?: string,
    currency?: "USD",
    options?: AxiosRequestConfig
  ) {
    return PullCryptoPaymentsApiFp(this.configuration)
      .presign(endUserAddress, paymentIntentId, amount, currency, options)
      .then((request) => request(this.axios, this.basePath));
  }
}

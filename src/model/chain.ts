/**
 * Core Functionality
 * APIs for managing your account balance. These endpoints are available with all Circle APIs.
 *
 * The version of the OpenAPI document: ${version}
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* A blockchain that a given currency is available on.
*/
export enum Chain {
    Algo = <any> 'ALGO',
    Avax = <any> 'AVAX',
    Btc = <any> 'BTC',
    Eth = <any> 'ETH',
    Flow = <any> 'FLOW',
    Hbar = <any> 'HBAR',
    Matic = <any> 'MATIC',
    Sol = <any> 'SOL',
    Trx = <any> 'TRX',
    Xlm = <any> 'XLM'
}
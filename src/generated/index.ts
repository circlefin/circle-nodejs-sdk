/* tslint:disable */
/* eslint-disable */
/**
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import {
  AddressesApi,
  BalancesApi,
  CBITApi,
  CUBIXApi,
  CardsApi,
  ChannelsApi,
  ChargebacksApi,
  CheckoutSessionsApi,
  CryptoAddressBookApi,
  CryptoExchangeRatesApi,
  CryptoPaymentIntentsApi,
  DepositsApi,
  EncryptionApi,
  HealthApi,
  ManagementApi,
  PIXApi,
  PaymentTokensApi,
  PaymentsApi,
  PayoutsApi,
  PullCryptoPaymentsApi,
  SettlementsApi,
  StablecoinsApi,
  SubscriptionsApi,
  TransfersApi,
  WiresApi
} from "./api";

import { Configuration } from "./configuration";
export * from "./models";

export class Circle {
  public addresses: AddressesApi;
  public balances: BalancesApi;
  public cbit: CBITApi;
  public cubix: CUBIXApi;
  public cards: CardsApi;
  public channels: ChannelsApi;
  public chargebacks: ChargebacksApi;
  public checkoutSessions: CheckoutSessionsApi;
  public cryptoAddressBook: CryptoAddressBookApi;
  public cryptoExchangeRates: CryptoExchangeRatesApi;
  public cryptoPaymentIntents: CryptoPaymentIntentsApi;
  public deposits: DepositsApi;
  public encryption: EncryptionApi;
  public health: HealthApi;
  public management: ManagementApi;
  public pix: PIXApi;
  public paymentTokens: PaymentTokensApi;
  public payments: PaymentsApi;
  public payouts: PayoutsApi;
  public pullCryptoPayments: PullCryptoPaymentsApi;
  public settlements: SettlementsApi;
  public stablecoins: StablecoinsApi;
  public subscriptions: SubscriptionsApi;
  public transfers: TransfersApi;
  public wires: WiresApi;

  constructor(apiKey: string, baseUrl: string) {
    const configuration = new Configuration({ basePath: baseUrl, apiKey });
    this.addresses = new AddressesApi(configuration);
    this.balances = new BalancesApi(configuration);
    this.cbit = new CBITApi(configuration);
    this.cubix = new CUBIXApi(configuration);
    this.cards = new CardsApi(configuration);
    this.channels = new ChannelsApi(configuration);
    this.chargebacks = new ChargebacksApi(configuration);
    this.checkoutSessions = new CheckoutSessionsApi(configuration);
    this.cryptoAddressBook = new CryptoAddressBookApi(configuration);
    this.cryptoExchangeRates = new CryptoExchangeRatesApi(configuration);
    this.cryptoPaymentIntents = new CryptoPaymentIntentsApi(configuration);
    this.deposits = new DepositsApi(configuration);
    this.encryption = new EncryptionApi(configuration);
    this.health = new HealthApi(configuration);
    this.management = new ManagementApi(configuration);
    this.pix = new PIXApi(configuration);
    this.paymentTokens = new PaymentTokensApi(configuration);
    this.payments = new PaymentsApi(configuration);
    this.payouts = new PayoutsApi(configuration);
    this.pullCryptoPayments = new PullCryptoPaymentsApi(configuration);
    this.settlements = new SettlementsApi(configuration);
    this.stablecoins = new StablecoinsApi(configuration);
    this.subscriptions = new SubscriptionsApi(configuration);
    this.transfers = new TransfersApi(configuration);
    this.wires = new WiresApi(configuration);
  }
}

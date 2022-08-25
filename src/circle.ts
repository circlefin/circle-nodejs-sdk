import { Configuration } from "./generated/configuration";
import {
  ACHApi,
  AddressesApi,
  BalancesApi,
  CardsApi,
  ChannelsApi,
  ChargebacksApi,
  DepositsApi,
  EncryptionApi,
  HealthApi,
  ManagementApi,
  PaymentsApi,
  PayoutsApi,
  ReturnsApi,
  ReversalsApi,
  SENApi,
  SEPAApi,
  SettlementsApi,
  SignetApi,
  StablecoinsApi,
  SubscriptionsApi,
  TransfersApi,
  WalletsApi,
  WiresApi
} from "./generated/api";

export enum CircleEnvironments {
  production = "https://account.circle.com",
  sandbox = "https://api-sandbox.circle.com"
}

export class Circle {
  public balances: BalancesApi;
  public payouts: PayoutsApi;
  public wires: WiresApi;
  public signet: SignetApi;
  public sen: SENApi;
  public transfers: TransfersApi;
  public addresses: AddressesApi;
  public deposits: DepositsApi;
  public wallets: WalletsApi;
  public health: HealthApi;
  public management: ManagementApi;
  public encryption: EncryptionApi;
  public subscriptions: SubscriptionsApi;
  public stablecoins: StablecoinsApi;
  public channels: ChannelsApi;
  public payments: PaymentsApi;
  public cards: CardsApi;
  public ach: ACHApi;
  public sepa: SEPAApi;
  public settlements: SettlementsApi;
  public chargebacks: ChargebacksApi;
  public reversals: ReversalsApi;
  public returns: ReturnsApi;

  constructor(apiKey: string, baseUrl: string) {
    const configuration = new Configuration({ basePath: baseUrl, apiKey });
    this.balances = new BalancesApi(configuration);
    this.payouts = new PayoutsApi(configuration);
    this.wires = new WiresApi(configuration);
    this.signet = new SignetApi(configuration);
    this.sen = new SENApi(configuration);
    this.transfers = new TransfersApi(configuration);
    this.addresses = new AddressesApi(configuration);
    this.deposits = new DepositsApi(configuration);
    this.wallets = new WalletsApi(configuration);
    this.health = new HealthApi(configuration);
    this.management = new ManagementApi(configuration);
    this.encryption = new EncryptionApi(configuration);
    this.subscriptions = new SubscriptionsApi(configuration);
    this.stablecoins = new StablecoinsApi(configuration);
    this.channels = new ChannelsApi(configuration);
    this.payments = new PaymentsApi(configuration);
    this.cards = new CardsApi(configuration);
    this.ach = new ACHApi(configuration);
    this.sepa = new SEPAApi(configuration);
    this.settlements = new SettlementsApi(configuration);
    this.chargebacks = new ChargebacksApi(configuration);
    this.reversals = new ReversalsApi(configuration);
    this.returns = new ReturnsApi(configuration);
  }
}

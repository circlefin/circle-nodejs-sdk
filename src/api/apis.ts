export * from './aCHApi';
import { ACHApi } from './aCHApi';
export * from './addressesApi';
import { AddressesApi } from './addressesApi';
export * from './balancesApi';
import { BalancesApi } from './balancesApi';
export * from './cardsApi';
import { CardsApi } from './cardsApi';
export * from './channelsApi';
import { ChannelsApi } from './channelsApi';
export * from './chargebacksApi';
import { ChargebacksApi } from './chargebacksApi';
export * from './depositsApi';
import { DepositsApi } from './depositsApi';
export * from './encryptionApi';
import { EncryptionApi } from './encryptionApi';
export * from './healthApi';
import { HealthApi } from './healthApi';
export * from './managementApi';
import { ManagementApi } from './managementApi';
export * from './paymentsApi';
import { PaymentsApi } from './paymentsApi';
export * from './payoutsApi';
import { PayoutsApi } from './payoutsApi';
export * from './returnsApi';
import { ReturnsApi } from './returnsApi';
export * from './reversalsApi';
import { ReversalsApi } from './reversalsApi';
export * from './sENApi';
import { SENApi } from './sENApi';
export * from './sEPAApi';
import { SEPAApi } from './sEPAApi';
export * from './settlementsApi';
import { SettlementsApi } from './settlementsApi';
export * from './signetApi';
import { SignetApi } from './signetApi';
export * from './stablecoinsApi';
import { StablecoinsApi } from './stablecoinsApi';
export * from './subscriptionsApi';
import { SubscriptionsApi } from './subscriptionsApi';
export * from './transfersApi';
import { TransfersApi } from './transfersApi';
export * from './walletsApi';
import { WalletsApi } from './walletsApi';
export * from './wiresApi';
import { WiresApi } from './wiresApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [ACHApi, AddressesApi, BalancesApi, CardsApi, ChannelsApi, ChargebacksApi, DepositsApi, EncryptionApi, HealthApi, ManagementApi, PaymentsApi, PayoutsApi, ReturnsApi, ReversalsApi, SENApi, SEPAApi, SettlementsApi, SignetApi, StablecoinsApi, SubscriptionsApi, TransfersApi, WalletsApi, WiresApi];

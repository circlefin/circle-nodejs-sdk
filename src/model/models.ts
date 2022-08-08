import localVarRequest from 'request';

export * from './aCH';
export * from './aCHBillingDetails';
export * from './aCHCreationRequest';
export * from './achVerificationErrorCodes';
export * from './addressObject';
export * from './badRequest';
export * from './balances';
export * from './bankAddress';
export * from './bankAddressIbanSupported';
export * from './bankAddressNonIban';
export * from './bankDestination';
export * from './basicCancel';
export * from './basicChargeback';
export * from './basicChargebackHistory';
export * from './basicPayment';
export * from './basicRefund';
export * from './billingDetails';
export * from './businessAccountDeposit';
export * from './businessAccountDestinationRequest';
export * from './businessAccountGenerateAddressRequest';
export * from './businessAccountPayoutCreationRequest';
export * from './businessAccountRecipientAddressCreationRequest';
export * from './businessAccountRecipientAddressObject';
export * from './businessAccountTransferCreationRequest';
export * from './cancelCreationRequest';
export * from './cancelPaymentResponse';
export * from './cancelRefundReversalStatus';
export * from './captureCreationRequest';
export * from './card';
export * from './cardCreationRequest';
export * from './cardUpdate';
export * from './cardVerificationResponse';
export * from './chain';
export * from './channelResponse';
export * from './chargebackCategories';
export * from './configuration';
export * from './configurationPayments';
export * from './conflict';
export * from './createACHBankAccountResponse';
export * from './createAchAccountResponse';
export * from './createBusinessAccountPayoutResponse';
export * from './createBusinessAccountRecipientAddressResponse';
export * from './createBusinessAccountSenBankAccountResponse';
export * from './createBusinessAccountSignetBankAccountResponse';
export * from './createBusinessAccountTransferResponse';
export * from './createBusinessAccountWireBankAccountResponse';
export * from './createCardResponse';
export * from './createMockChargebackResponse';
export * from './createPaymentResponse';
export * from './createPayoutResponse';
export * from './createSEPABankAccountResponse';
export * from './createSenPaymentResponse';
export * from './createSepaPaymentResponse';
export * from './createTransferResponse';
export * from './createWalletResponse';
export * from './createWireBankAccountResponse';
export * from './createWirePaymentResponse';
export * from './currency';
export * from './cvvResults';
export * from './deleteUnsubscribeResponse';
export * from './detailedCancel';
export * from './detailedPayment';
export * from './detailedPaymentPolymorphic';
export * from './detailedPayout';
export * from './detailedRefund';
export * from './eci';
export * from './externalFiatAccountStatus';
export * from './fiatMoney';
export * from './fiatMoneyUsd';
export * from './generateAddressRequest';
export * from './generateAddressResponse';
export * from './generateBusinessAccountDepositAddressResponse';
export * from './getACHBankAccountResponse';
export * from './getAddressesResponse';
export * from './getBalancesResponse';
export * from './getBusinessAccountBalancesResponse';
export * from './getBusinessAccountDepositAddressesResponse';
export * from './getBusinessAccountPayoutResponse';
export * from './getBusinessAccountPayoutsResponse';
export * from './getBusinessAccountRecipientAddressesResponse';
export * from './getBusinessAccountSenBankAccountResponse';
export * from './getBusinessAccountSenBankAccounts200Response';
export * from './getBusinessAccountSenInstructionsBankAccountResponse';
export * from './getBusinessAccountSignetBankAccountResponse';
export * from './getBusinessAccountSignetBankAccountsResponse';
export * from './getBusinessAccountSignetInstructionsBankAccountResponse';
export * from './getBusinessAccountTransferResponse';
export * from './getBusinessAccountWireBankAccountResponse';
export * from './getBusinessAccountWireBankAccounts200Response';
export * from './getBusinessAccountWireInstructionsBankAccountResponse';
export * from './getCardResponse';
export * from './getCardsResponse';
export * from './getChargebackResponse';
export * from './getChargebacksResponse';
export * from './getConfigResponse';
export * from './getListSubscriptionsResponse';
export * from './getPaymentResponse';
export * from './getPaymentsResponse';
export * from './getPayoutResponse';
export * from './getPayoutsResponse';
export * from './getPublicKeyResponse';
export * from './getReturnsResponse';
export * from './getReversalsResponse';
export * from './getSEPABankAccountResponse';
export * from './getSEPAInstructionsBankAccountResponse';
export * from './getSettlementResponse';
export * from './getSettlementsResponse';
export * from './getStablecoinsResponse';
export * from './getTransferResponse';
export * from './getWalletResponse';
export * from './getWalletsResponse';
export * from './getWireBankAccountResponse';
export * from './getWireInstructionsBankAccountResponse';
export * from './identity';
export * from './identityAddress';
export * from './limitExceeded';
export * from './listChannelsResponse';
export * from './metadataCardAndAch';
export * from './metadataPayment';
export * from './metadataPayout';
export * from './metadataPhoneEmail';
export * from './mockAchAccount';
export * from './mockAchAccountCreationRequest';
export * from './mockAchAccountResponse';
export * from './mockChargebackCreationRequest';
export * from './mockSenPaymentBeneficiaryBankInstruction';
export * from './mockSenPaymentRequest';
export * from './mockSenPaymentResponse';
export * from './mockSepaPaymentRequest';
export * from './mockSepaPaymentResponse';
export * from './mockWirePaymentBeneficiaryBankInstruction';
export * from './mockWirePaymentRequest';
export * from './mockWirePaymentResponse';
export * from './model3dsResults';
export * from './money';
export * from './notAuthorized';
export * from './notFound';
export * from './paymentCreationRequest';
export * from './paymentErrorCode';
export * from './paymentInfoCancel';
export * from './paymentInfoPaymentAndRefund';
export * from './paymentStatus';
export * from './paymentVerificationResponse';
export * from './payout';
export * from './payoutBusinessAccount';
export * from './payoutBusinessAccountAdjustments';
export * from './payoutCreationRequest';
export * from './payoutDestinationType';
export * from './payoutErrorCode';
export * from './payoutStatus';
export * from './ping';
export * from './publicKey';
export * from './refundCreationRequest';
export * from './refundPaymentResponse';
export * from './requiredAction';
export * from './reversal';
export * from './reversalReason';
export * from './riskEvaluation';
export * from './sEPA';
export * from './sEPACreationRequest';
export * from './sEPAInstruction';
export * from './sEPAInstructionBeneficiary';
export * from './sEPAInstructionBeneficiaryBank';
export * from './searchBusinessAccountDepositsResponse';
export * from './searchBusinessAccountTransfersResponse';
export * from './searchTransfersResponse';
export * from './senFiatAccountCreationRequest';
export * from './senFiatAccountResponse';
export * from './senInstruction';
export * from './settlement';
export * from './signetFiatAccountCreationRequest';
export * from './signetFiatAccountResponse';
export * from './signetInstruction';
export * from './simpleBillingDetails';
export * from './simpleCard';
export * from './source';
export * from './sourceResponse';
export * from './stablecoin';
export * from './subscribeResponse';
export * from './subscriptionDetail';
export * from './subscriptionRequest';
export * from './subscriptionResponse';
export * from './tokenAmount';
export * from './transfer';
export * from './transferCreationRequest';
export * from './transferCreationRequestDestination';
export * from './transferDestinationBlockchainLocation';
export * from './transferDestinationLocation';
export * from './transferDestinationWalletLocation';
export * from './transferDetailedTransfer';
export * from './transferErrorCode';
export * from './transferRequestBlockchainLocation';
export * from './transferRequestSourceWalletLocation';
export * from './transferRequestVerifiedBlockchainLocation';
export * from './transferSourceBlockchainLocation';
export * from './transferSourceLocation';
export * from './transferSourceWalletLocation';
export * from './unwithdrawalObject';
export * from './updateCardResponse';
export * from './verificationErrorCode';
export * from './wallet';
export * from './walletCreationRequest';
export * from './walletLocation';
export * from './wire';
export * from './wireCreationRequest';
export * from './wireCreationRequestAccountNumber';
export * from './wireCreationRequestIban';
export * from './wireCreationRequestUS';
export * from './wireInstruction';
export * from './wireInstructionBeneficiary';
export * from './wireInstructionBeneficiaryBank';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ACH } from './aCH';
import { ACHBillingDetails } from './aCHBillingDetails';
import { ACHCreationRequest } from './aCHCreationRequest';
import { AchVerificationErrorCodes } from './achVerificationErrorCodes';
import { AddressObject } from './addressObject';
import { BadRequest } from './badRequest';
import { Balances } from './balances';
import { BankAddress } from './bankAddress';
import { BankAddressIbanSupported } from './bankAddressIbanSupported';
import { BankAddressNonIban } from './bankAddressNonIban';
import { BankDestination } from './bankDestination';
import { BasicCancel } from './basicCancel';
import { BasicChargeback } from './basicChargeback';
import { BasicChargebackHistory } from './basicChargebackHistory';
import { BasicPayment } from './basicPayment';
import { BasicRefund } from './basicRefund';
import { BillingDetails } from './billingDetails';
import { BusinessAccountDeposit } from './businessAccountDeposit';
import { BusinessAccountDestinationRequest } from './businessAccountDestinationRequest';
import { BusinessAccountGenerateAddressRequest } from './businessAccountGenerateAddressRequest';
import { BusinessAccountPayoutCreationRequest } from './businessAccountPayoutCreationRequest';
import { BusinessAccountRecipientAddressCreationRequest } from './businessAccountRecipientAddressCreationRequest';
import { BusinessAccountRecipientAddressObject } from './businessAccountRecipientAddressObject';
import { BusinessAccountTransferCreationRequest } from './businessAccountTransferCreationRequest';
import { CancelCreationRequest } from './cancelCreationRequest';
import { CancelPaymentResponse } from './cancelPaymentResponse';
import { CancelRefundReversalStatus } from './cancelRefundReversalStatus';
import { CaptureCreationRequest } from './captureCreationRequest';
import { Card } from './card';
import { CardCreationRequest } from './cardCreationRequest';
import { CardUpdate } from './cardUpdate';
import { CardVerificationResponse } from './cardVerificationResponse';
import { Chain } from './chain';
import { ChannelResponse } from './channelResponse';
import { ChargebackCategories } from './chargebackCategories';
import { Configuration } from './configuration';
import { ConfigurationPayments } from './configurationPayments';
import { Conflict } from './conflict';
import { CreateACHBankAccountResponse } from './createACHBankAccountResponse';
import { CreateAchAccountResponse } from './createAchAccountResponse';
import { CreateBusinessAccountPayoutResponse } from './createBusinessAccountPayoutResponse';
import { CreateBusinessAccountRecipientAddressResponse } from './createBusinessAccountRecipientAddressResponse';
import { CreateBusinessAccountSenBankAccountResponse } from './createBusinessAccountSenBankAccountResponse';
import { CreateBusinessAccountSignetBankAccountResponse } from './createBusinessAccountSignetBankAccountResponse';
import { CreateBusinessAccountTransferResponse } from './createBusinessAccountTransferResponse';
import { CreateBusinessAccountWireBankAccountResponse } from './createBusinessAccountWireBankAccountResponse';
import { CreateCardResponse } from './createCardResponse';
import { CreateMockChargebackResponse } from './createMockChargebackResponse';
import { CreatePaymentResponse } from './createPaymentResponse';
import { CreatePayoutResponse } from './createPayoutResponse';
import { CreateSEPABankAccountResponse } from './createSEPABankAccountResponse';
import { CreateSenPaymentResponse } from './createSenPaymentResponse';
import { CreateSepaPaymentResponse } from './createSepaPaymentResponse';
import { CreateTransferResponse } from './createTransferResponse';
import { CreateWalletResponse } from './createWalletResponse';
import { CreateWireBankAccountResponse } from './createWireBankAccountResponse';
import { CreateWirePaymentResponse } from './createWirePaymentResponse';
import { Currency } from './currency';
import { CvvResults } from './cvvResults';
import { DeleteUnsubscribeResponse } from './deleteUnsubscribeResponse';
import { DetailedCancel } from './detailedCancel';
import { DetailedPayment } from './detailedPayment';
import { DetailedPaymentPolymorphic } from './detailedPaymentPolymorphic';
import { DetailedPayout } from './detailedPayout';
import { DetailedRefund } from './detailedRefund';
import { Eci } from './eci';
import { ExternalFiatAccountStatus } from './externalFiatAccountStatus';
import { FiatMoney } from './fiatMoney';
import { FiatMoneyUsd } from './fiatMoneyUsd';
import { GenerateAddressRequest } from './generateAddressRequest';
import { GenerateAddressResponse } from './generateAddressResponse';
import { GenerateBusinessAccountDepositAddressResponse } from './generateBusinessAccountDepositAddressResponse';
import { GetACHBankAccountResponse } from './getACHBankAccountResponse';
import { GetAddressesResponse } from './getAddressesResponse';
import { GetBalancesResponse } from './getBalancesResponse';
import { GetBusinessAccountBalancesResponse } from './getBusinessAccountBalancesResponse';
import { GetBusinessAccountDepositAddressesResponse } from './getBusinessAccountDepositAddressesResponse';
import { GetBusinessAccountPayoutResponse } from './getBusinessAccountPayoutResponse';
import { GetBusinessAccountPayoutsResponse } from './getBusinessAccountPayoutsResponse';
import { GetBusinessAccountRecipientAddressesResponse } from './getBusinessAccountRecipientAddressesResponse';
import { GetBusinessAccountSenBankAccountResponse } from './getBusinessAccountSenBankAccountResponse';
import { GetBusinessAccountSenBankAccounts200Response } from './getBusinessAccountSenBankAccounts200Response';
import { GetBusinessAccountSenInstructionsBankAccountResponse } from './getBusinessAccountSenInstructionsBankAccountResponse';
import { GetBusinessAccountSignetBankAccountResponse } from './getBusinessAccountSignetBankAccountResponse';
import { GetBusinessAccountSignetBankAccountsResponse } from './getBusinessAccountSignetBankAccountsResponse';
import { GetBusinessAccountSignetInstructionsBankAccountResponse } from './getBusinessAccountSignetInstructionsBankAccountResponse';
import { GetBusinessAccountTransferResponse } from './getBusinessAccountTransferResponse';
import { GetBusinessAccountWireBankAccountResponse } from './getBusinessAccountWireBankAccountResponse';
import { GetBusinessAccountWireBankAccounts200Response } from './getBusinessAccountWireBankAccounts200Response';
import { GetBusinessAccountWireInstructionsBankAccountResponse } from './getBusinessAccountWireInstructionsBankAccountResponse';
import { GetCardResponse } from './getCardResponse';
import { GetCardsResponse } from './getCardsResponse';
import { GetChargebackResponse } from './getChargebackResponse';
import { GetChargebacksResponse } from './getChargebacksResponse';
import { GetConfigResponse } from './getConfigResponse';
import { GetListSubscriptionsResponse } from './getListSubscriptionsResponse';
import { GetPaymentResponse } from './getPaymentResponse';
import { GetPaymentsResponse } from './getPaymentsResponse';
import { GetPayoutResponse } from './getPayoutResponse';
import { GetPayoutsResponse } from './getPayoutsResponse';
import { GetPublicKeyResponse } from './getPublicKeyResponse';
import { GetReturnsResponse } from './getReturnsResponse';
import { GetReversalsResponse } from './getReversalsResponse';
import { GetSEPABankAccountResponse } from './getSEPABankAccountResponse';
import { GetSEPAInstructionsBankAccountResponse } from './getSEPAInstructionsBankAccountResponse';
import { GetSettlementResponse } from './getSettlementResponse';
import { GetSettlementsResponse } from './getSettlementsResponse';
import { GetStablecoinsResponse } from './getStablecoinsResponse';
import { GetTransferResponse } from './getTransferResponse';
import { GetWalletResponse } from './getWalletResponse';
import { GetWalletsResponse } from './getWalletsResponse';
import { GetWireBankAccountResponse } from './getWireBankAccountResponse';
import { GetWireInstructionsBankAccountResponse } from './getWireInstructionsBankAccountResponse';
import { Identity } from './identity';
import { IdentityAddress } from './identityAddress';
import { LimitExceeded } from './limitExceeded';
import { ListChannelsResponse } from './listChannelsResponse';
import { MetadataCardAndAch } from './metadataCardAndAch';
import { MetadataPayment } from './metadataPayment';
import { MetadataPayout } from './metadataPayout';
import { MetadataPhoneEmail } from './metadataPhoneEmail';
import { MockAchAccount } from './mockAchAccount';
import { MockAchAccountCreationRequest } from './mockAchAccountCreationRequest';
import { MockAchAccountResponse } from './mockAchAccountResponse';
import { MockChargebackCreationRequest } from './mockChargebackCreationRequest';
import { MockSenPaymentBeneficiaryBankInstruction } from './mockSenPaymentBeneficiaryBankInstruction';
import { MockSenPaymentRequest } from './mockSenPaymentRequest';
import { MockSenPaymentResponse } from './mockSenPaymentResponse';
import { MockSepaPaymentRequest } from './mockSepaPaymentRequest';
import { MockSepaPaymentResponse } from './mockSepaPaymentResponse';
import { MockWirePaymentBeneficiaryBankInstruction } from './mockWirePaymentBeneficiaryBankInstruction';
import { MockWirePaymentRequest } from './mockWirePaymentRequest';
import { MockWirePaymentResponse } from './mockWirePaymentResponse';
import { Model3dsResults } from './model3dsResults';
import { Money } from './money';
import { NotAuthorized } from './notAuthorized';
import { NotFound } from './notFound';
import { PaymentCreationRequest } from './paymentCreationRequest';
import { PaymentErrorCode } from './paymentErrorCode';
import { PaymentInfoCancel } from './paymentInfoCancel';
import { PaymentInfoPaymentAndRefund } from './paymentInfoPaymentAndRefund';
import { PaymentStatus } from './paymentStatus';
import { PaymentVerificationResponse } from './paymentVerificationResponse';
import { Payout } from './payout';
import { PayoutBusinessAccount } from './payoutBusinessAccount';
import { PayoutBusinessAccountAdjustments } from './payoutBusinessAccountAdjustments';
import { PayoutCreationRequest } from './payoutCreationRequest';
import { PayoutDestinationType } from './payoutDestinationType';
import { PayoutErrorCode } from './payoutErrorCode';
import { PayoutStatus } from './payoutStatus';
import { Ping } from './ping';
import { PublicKey } from './publicKey';
import { RefundCreationRequest } from './refundCreationRequest';
import { RefundPaymentResponse } from './refundPaymentResponse';
import { RequiredAction } from './requiredAction';
import { Reversal } from './reversal';
import { ReversalReason } from './reversalReason';
import { RiskEvaluation } from './riskEvaluation';
import { SEPA } from './sEPA';
import { SEPACreationRequest } from './sEPACreationRequest';
import { SEPAInstruction } from './sEPAInstruction';
import { SEPAInstructionBeneficiary } from './sEPAInstructionBeneficiary';
import { SEPAInstructionBeneficiaryBank } from './sEPAInstructionBeneficiaryBank';
import { SearchBusinessAccountDepositsResponse } from './searchBusinessAccountDepositsResponse';
import { SearchBusinessAccountTransfersResponse } from './searchBusinessAccountTransfersResponse';
import { SearchTransfersResponse } from './searchTransfersResponse';
import { SenFiatAccountCreationRequest } from './senFiatAccountCreationRequest';
import { SenFiatAccountResponse } from './senFiatAccountResponse';
import { SenInstruction } from './senInstruction';
import { Settlement } from './settlement';
import { SignetFiatAccountCreationRequest } from './signetFiatAccountCreationRequest';
import { SignetFiatAccountResponse } from './signetFiatAccountResponse';
import { SignetInstruction } from './signetInstruction';
import { SimpleBillingDetails } from './simpleBillingDetails';
import { SimpleCard } from './simpleCard';
import { Source } from './source';
import { SourceResponse } from './sourceResponse';
import { Stablecoin } from './stablecoin';
import { SubscribeResponse } from './subscribeResponse';
import { SubscriptionDetail } from './subscriptionDetail';
import { SubscriptionRequest } from './subscriptionRequest';
import { SubscriptionResponse } from './subscriptionResponse';
import { TokenAmount } from './tokenAmount';
import { Transfer } from './transfer';
import { TransferCreationRequest } from './transferCreationRequest';
import { TransferCreationRequestDestination } from './transferCreationRequestDestination';
import { TransferDestinationBlockchainLocation } from './transferDestinationBlockchainLocation';
import { TransferDestinationLocation } from './transferDestinationLocation';
import { TransferDestinationWalletLocation } from './transferDestinationWalletLocation';
import { TransferDetailedTransfer } from './transferDetailedTransfer';
import { TransferErrorCode } from './transferErrorCode';
import { TransferRequestBlockchainLocation } from './transferRequestBlockchainLocation';
import { TransferRequestSourceWalletLocation } from './transferRequestSourceWalletLocation';
import { TransferRequestVerifiedBlockchainLocation } from './transferRequestVerifiedBlockchainLocation';
import { TransferSourceBlockchainLocation } from './transferSourceBlockchainLocation';
import { TransferSourceLocation } from './transferSourceLocation';
import { TransferSourceWalletLocation } from './transferSourceWalletLocation';
import { UnwithdrawalObject } from './unwithdrawalObject';
import { UpdateCardResponse } from './updateCardResponse';
import { VerificationErrorCode } from './verificationErrorCode';
import { Wallet } from './wallet';
import { WalletCreationRequest } from './walletCreationRequest';
import { WalletLocation } from './walletLocation';
import { Wire } from './wire';
import { WireCreationRequest } from './wireCreationRequest';
import { WireCreationRequestAccountNumber } from './wireCreationRequestAccountNumber';
import { WireCreationRequestIban } from './wireCreationRequestIban';
import { WireCreationRequestUS } from './wireCreationRequestUS';
import { WireInstruction } from './wireInstruction';
import { WireInstructionBeneficiary } from './wireInstructionBeneficiary';
import { WireInstructionBeneficiaryBank } from './wireInstructionBeneficiaryBank';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "AchVerificationErrorCodes": AchVerificationErrorCodes,
        "BasicCancel.TypeEnum": BasicCancel.TypeEnum,
        "BasicCancel.DescriptionEnum": BasicCancel.DescriptionEnum,
        "BasicChargebackHistory.TypeEnum": BasicChargebackHistory.TypeEnum,
        "BasicPayment.TypeEnum": BasicPayment.TypeEnum,
        "BasicPayment.DescriptionEnum": BasicPayment.DescriptionEnum,
        "BasicRefund.TypeEnum": BasicRefund.TypeEnum,
        "BasicRefund.DescriptionEnum": BasicRefund.DescriptionEnum,
        "BusinessAccountDeposit.StatusEnum": BusinessAccountDeposit.StatusEnum,
        "BusinessAccountDestinationRequest.TypeEnum": BusinessAccountDestinationRequest.TypeEnum,
        "CancelRefundReversalStatus": CancelRefundReversalStatus,
        "Card.NetworkEnum": Card.NetworkEnum,
        "Card.FundingTypeEnum": Card.FundingTypeEnum,
        "Chain": Chain,
        "ChargebackCategories": ChargebackCategories,
        "Currency": Currency,
        "CvvResults": CvvResults,
        "DetailedCancel.TypeEnum": DetailedCancel.TypeEnum,
        "DetailedCancel.DescriptionEnum": DetailedCancel.DescriptionEnum,
        "DetailedPayment.TypeEnum": DetailedPayment.TypeEnum,
        "DetailedPayment.DescriptionEnum": DetailedPayment.DescriptionEnum,
        "DetailedPaymentPolymorphic.TypeEnum": DetailedPaymentPolymorphic.TypeEnum,
        "DetailedPaymentPolymorphic.DescriptionEnum": DetailedPaymentPolymorphic.DescriptionEnum,
        "DetailedPayout.StatusEnum": DetailedPayout.StatusEnum,
        "DetailedRefund.TypeEnum": DetailedRefund.TypeEnum,
        "DetailedRefund.DescriptionEnum": DetailedRefund.DescriptionEnum,
        "Eci": Eci,
        "ExternalFiatAccountStatus": ExternalFiatAccountStatus,
        "FiatMoney.CurrencyEnum": FiatMoney.CurrencyEnum,
        "FiatMoneyUsd.CurrencyEnum": FiatMoneyUsd.CurrencyEnum,
        "Identity.TypeEnum": Identity.TypeEnum,
        "MockSenPaymentResponse.StatusEnum": MockSenPaymentResponse.StatusEnum,
        "MockSepaPaymentResponse.StatusEnum": MockSepaPaymentResponse.StatusEnum,
        "MockWirePaymentResponse.StatusEnum": MockWirePaymentResponse.StatusEnum,
        "Model3dsResults": Model3dsResults,
        "Money.CurrencyEnum": Money.CurrencyEnum,
        "PaymentCreationRequest.VerificationEnum": PaymentCreationRequest.VerificationEnum,
        "PaymentErrorCode": PaymentErrorCode,
        "PaymentInfoCancel.TypeEnum": PaymentInfoCancel.TypeEnum,
        "PaymentInfoCancel.DescriptionEnum": PaymentInfoCancel.DescriptionEnum,
        "PaymentInfoPaymentAndRefund.TypeEnum": PaymentInfoPaymentAndRefund.TypeEnum,
        "PaymentInfoPaymentAndRefund.DescriptionEnum": PaymentInfoPaymentAndRefund.DescriptionEnum,
        "PaymentStatus": PaymentStatus,
        "PayoutDestinationType": PayoutDestinationType,
        "PayoutErrorCode": PayoutErrorCode,
        "PayoutStatus": PayoutStatus,
        "RequiredAction.TypeEnum": RequiredAction.TypeEnum,
        "ReversalReason": ReversalReason,
        "RiskEvaluation.DecisionEnum": RiskEvaluation.DecisionEnum,
        "SimpleCard.NetworkEnum": SimpleCard.NetworkEnum,
        "Source.TypeEnum": Source.TypeEnum,
        "SourceResponse.TypeEnum": SourceResponse.TypeEnum,
        "SubscriptionDetail.StatusEnum": SubscriptionDetail.StatusEnum,
        "Transfer.StatusEnum": Transfer.StatusEnum,
        "TransferCreationRequestDestination.TypeEnum": TransferCreationRequestDestination.TypeEnum,
        "TransferDestinationBlockchainLocation.TypeEnum": TransferDestinationBlockchainLocation.TypeEnum,
        "TransferDestinationLocation.TypeEnum": TransferDestinationLocation.TypeEnum,
        "TransferDestinationWalletLocation.TypeEnum": TransferDestinationWalletLocation.TypeEnum,
        "TransferDetailedTransfer.StatusEnum": TransferDetailedTransfer.StatusEnum,
        "TransferErrorCode": TransferErrorCode,
        "TransferRequestBlockchainLocation.TypeEnum": TransferRequestBlockchainLocation.TypeEnum,
        "TransferRequestSourceWalletLocation.TypeEnum": TransferRequestSourceWalletLocation.TypeEnum,
        "TransferRequestVerifiedBlockchainLocation.TypeEnum": TransferRequestVerifiedBlockchainLocation.TypeEnum,
        "TransferSourceBlockchainLocation.TypeEnum": TransferSourceBlockchainLocation.TypeEnum,
        "TransferSourceLocation.TypeEnum": TransferSourceLocation.TypeEnum,
        "TransferSourceWalletLocation.TypeEnum": TransferSourceWalletLocation.TypeEnum,
        "UnwithdrawalObject.StatusEnum": UnwithdrawalObject.StatusEnum,
        "VerificationErrorCode": VerificationErrorCode,
        "Wallet.TypeEnum": Wallet.TypeEnum,
        "WalletLocation.TypeEnum": WalletLocation.TypeEnum,
}

let typeMap: {[index: string]: any} = {
    "ACH": ACH,
    "ACHBillingDetails": ACHBillingDetails,
    "ACHCreationRequest": ACHCreationRequest,
    "AddressObject": AddressObject,
    "BadRequest": BadRequest,
    "Balances": Balances,
    "BankAddress": BankAddress,
    "BankAddressIbanSupported": BankAddressIbanSupported,
    "BankAddressNonIban": BankAddressNonIban,
    "BankDestination": BankDestination,
    "BasicCancel": BasicCancel,
    "BasicChargeback": BasicChargeback,
    "BasicChargebackHistory": BasicChargebackHistory,
    "BasicPayment": BasicPayment,
    "BasicRefund": BasicRefund,
    "BillingDetails": BillingDetails,
    "BusinessAccountDeposit": BusinessAccountDeposit,
    "BusinessAccountDestinationRequest": BusinessAccountDestinationRequest,
    "BusinessAccountGenerateAddressRequest": BusinessAccountGenerateAddressRequest,
    "BusinessAccountPayoutCreationRequest": BusinessAccountPayoutCreationRequest,
    "BusinessAccountRecipientAddressCreationRequest": BusinessAccountRecipientAddressCreationRequest,
    "BusinessAccountRecipientAddressObject": BusinessAccountRecipientAddressObject,
    "BusinessAccountTransferCreationRequest": BusinessAccountTransferCreationRequest,
    "CancelCreationRequest": CancelCreationRequest,
    "CancelPaymentResponse": CancelPaymentResponse,
    "CaptureCreationRequest": CaptureCreationRequest,
    "Card": Card,
    "CardCreationRequest": CardCreationRequest,
    "CardUpdate": CardUpdate,
    "CardVerificationResponse": CardVerificationResponse,
    "ChannelResponse": ChannelResponse,
    "Configuration": Configuration,
    "ConfigurationPayments": ConfigurationPayments,
    "Conflict": Conflict,
    "CreateACHBankAccountResponse": CreateACHBankAccountResponse,
    "CreateAchAccountResponse": CreateAchAccountResponse,
    "CreateBusinessAccountPayoutResponse": CreateBusinessAccountPayoutResponse,
    "CreateBusinessAccountRecipientAddressResponse": CreateBusinessAccountRecipientAddressResponse,
    "CreateBusinessAccountSenBankAccountResponse": CreateBusinessAccountSenBankAccountResponse,
    "CreateBusinessAccountSignetBankAccountResponse": CreateBusinessAccountSignetBankAccountResponse,
    "CreateBusinessAccountTransferResponse": CreateBusinessAccountTransferResponse,
    "CreateBusinessAccountWireBankAccountResponse": CreateBusinessAccountWireBankAccountResponse,
    "CreateCardResponse": CreateCardResponse,
    "CreateMockChargebackResponse": CreateMockChargebackResponse,
    "CreatePaymentResponse": CreatePaymentResponse,
    "CreatePayoutResponse": CreatePayoutResponse,
    "CreateSEPABankAccountResponse": CreateSEPABankAccountResponse,
    "CreateSenPaymentResponse": CreateSenPaymentResponse,
    "CreateSepaPaymentResponse": CreateSepaPaymentResponse,
    "CreateTransferResponse": CreateTransferResponse,
    "CreateWalletResponse": CreateWalletResponse,
    "CreateWireBankAccountResponse": CreateWireBankAccountResponse,
    "CreateWirePaymentResponse": CreateWirePaymentResponse,
    "DeleteUnsubscribeResponse": DeleteUnsubscribeResponse,
    "DetailedCancel": DetailedCancel,
    "DetailedPayment": DetailedPayment,
    "DetailedPaymentPolymorphic": DetailedPaymentPolymorphic,
    "DetailedPayout": DetailedPayout,
    "DetailedRefund": DetailedRefund,
    "FiatMoney": FiatMoney,
    "FiatMoneyUsd": FiatMoneyUsd,
    "GenerateAddressRequest": GenerateAddressRequest,
    "GenerateAddressResponse": GenerateAddressResponse,
    "GenerateBusinessAccountDepositAddressResponse": GenerateBusinessAccountDepositAddressResponse,
    "GetACHBankAccountResponse": GetACHBankAccountResponse,
    "GetAddressesResponse": GetAddressesResponse,
    "GetBalancesResponse": GetBalancesResponse,
    "GetBusinessAccountBalancesResponse": GetBusinessAccountBalancesResponse,
    "GetBusinessAccountDepositAddressesResponse": GetBusinessAccountDepositAddressesResponse,
    "GetBusinessAccountPayoutResponse": GetBusinessAccountPayoutResponse,
    "GetBusinessAccountPayoutsResponse": GetBusinessAccountPayoutsResponse,
    "GetBusinessAccountRecipientAddressesResponse": GetBusinessAccountRecipientAddressesResponse,
    "GetBusinessAccountSenBankAccountResponse": GetBusinessAccountSenBankAccountResponse,
    "GetBusinessAccountSenBankAccounts200Response": GetBusinessAccountSenBankAccounts200Response,
    "GetBusinessAccountSenInstructionsBankAccountResponse": GetBusinessAccountSenInstructionsBankAccountResponse,
    "GetBusinessAccountSignetBankAccountResponse": GetBusinessAccountSignetBankAccountResponse,
    "GetBusinessAccountSignetBankAccountsResponse": GetBusinessAccountSignetBankAccountsResponse,
    "GetBusinessAccountSignetInstructionsBankAccountResponse": GetBusinessAccountSignetInstructionsBankAccountResponse,
    "GetBusinessAccountTransferResponse": GetBusinessAccountTransferResponse,
    "GetBusinessAccountWireBankAccountResponse": GetBusinessAccountWireBankAccountResponse,
    "GetBusinessAccountWireBankAccounts200Response": GetBusinessAccountWireBankAccounts200Response,
    "GetBusinessAccountWireInstructionsBankAccountResponse": GetBusinessAccountWireInstructionsBankAccountResponse,
    "GetCardResponse": GetCardResponse,
    "GetCardsResponse": GetCardsResponse,
    "GetChargebackResponse": GetChargebackResponse,
    "GetChargebacksResponse": GetChargebacksResponse,
    "GetConfigResponse": GetConfigResponse,
    "GetListSubscriptionsResponse": GetListSubscriptionsResponse,
    "GetPaymentResponse": GetPaymentResponse,
    "GetPaymentsResponse": GetPaymentsResponse,
    "GetPayoutResponse": GetPayoutResponse,
    "GetPayoutsResponse": GetPayoutsResponse,
    "GetPublicKeyResponse": GetPublicKeyResponse,
    "GetReturnsResponse": GetReturnsResponse,
    "GetReversalsResponse": GetReversalsResponse,
    "GetSEPABankAccountResponse": GetSEPABankAccountResponse,
    "GetSEPAInstructionsBankAccountResponse": GetSEPAInstructionsBankAccountResponse,
    "GetSettlementResponse": GetSettlementResponse,
    "GetSettlementsResponse": GetSettlementsResponse,
    "GetStablecoinsResponse": GetStablecoinsResponse,
    "GetTransferResponse": GetTransferResponse,
    "GetWalletResponse": GetWalletResponse,
    "GetWalletsResponse": GetWalletsResponse,
    "GetWireBankAccountResponse": GetWireBankAccountResponse,
    "GetWireInstructionsBankAccountResponse": GetWireInstructionsBankAccountResponse,
    "Identity": Identity,
    "IdentityAddress": IdentityAddress,
    "LimitExceeded": LimitExceeded,
    "ListChannelsResponse": ListChannelsResponse,
    "MetadataCardAndAch": MetadataCardAndAch,
    "MetadataPayment": MetadataPayment,
    "MetadataPayout": MetadataPayout,
    "MetadataPhoneEmail": MetadataPhoneEmail,
    "MockAchAccount": MockAchAccount,
    "MockAchAccountCreationRequest": MockAchAccountCreationRequest,
    "MockAchAccountResponse": MockAchAccountResponse,
    "MockChargebackCreationRequest": MockChargebackCreationRequest,
    "MockSenPaymentBeneficiaryBankInstruction": MockSenPaymentBeneficiaryBankInstruction,
    "MockSenPaymentRequest": MockSenPaymentRequest,
    "MockSenPaymentResponse": MockSenPaymentResponse,
    "MockSepaPaymentRequest": MockSepaPaymentRequest,
    "MockSepaPaymentResponse": MockSepaPaymentResponse,
    "MockWirePaymentBeneficiaryBankInstruction": MockWirePaymentBeneficiaryBankInstruction,
    "MockWirePaymentRequest": MockWirePaymentRequest,
    "MockWirePaymentResponse": MockWirePaymentResponse,
    "Money": Money,
    "NotAuthorized": NotAuthorized,
    "NotFound": NotFound,
    "PaymentCreationRequest": PaymentCreationRequest,
    "PaymentInfoCancel": PaymentInfoCancel,
    "PaymentInfoPaymentAndRefund": PaymentInfoPaymentAndRefund,
    "PaymentVerificationResponse": PaymentVerificationResponse,
    "Payout": Payout,
    "PayoutBusinessAccount": PayoutBusinessAccount,
    "PayoutBusinessAccountAdjustments": PayoutBusinessAccountAdjustments,
    "PayoutCreationRequest": PayoutCreationRequest,
    "Ping": Ping,
    "PublicKey": PublicKey,
    "RefundCreationRequest": RefundCreationRequest,
    "RefundPaymentResponse": RefundPaymentResponse,
    "RequiredAction": RequiredAction,
    "Reversal": Reversal,
    "RiskEvaluation": RiskEvaluation,
    "SEPA": SEPA,
    "SEPACreationRequest": SEPACreationRequest,
    "SEPAInstruction": SEPAInstruction,
    "SEPAInstructionBeneficiary": SEPAInstructionBeneficiary,
    "SEPAInstructionBeneficiaryBank": SEPAInstructionBeneficiaryBank,
    "SearchBusinessAccountDepositsResponse": SearchBusinessAccountDepositsResponse,
    "SearchBusinessAccountTransfersResponse": SearchBusinessAccountTransfersResponse,
    "SearchTransfersResponse": SearchTransfersResponse,
    "SenFiatAccountCreationRequest": SenFiatAccountCreationRequest,
    "SenFiatAccountResponse": SenFiatAccountResponse,
    "SenInstruction": SenInstruction,
    "Settlement": Settlement,
    "SignetFiatAccountCreationRequest": SignetFiatAccountCreationRequest,
    "SignetFiatAccountResponse": SignetFiatAccountResponse,
    "SignetInstruction": SignetInstruction,
    "SimpleBillingDetails": SimpleBillingDetails,
    "SimpleCard": SimpleCard,
    "Source": Source,
    "SourceResponse": SourceResponse,
    "Stablecoin": Stablecoin,
    "SubscribeResponse": SubscribeResponse,
    "SubscriptionDetail": SubscriptionDetail,
    "SubscriptionRequest": SubscriptionRequest,
    "SubscriptionResponse": SubscriptionResponse,
    "TokenAmount": TokenAmount,
    "Transfer": Transfer,
    "TransferCreationRequest": TransferCreationRequest,
    "TransferCreationRequestDestination": TransferCreationRequestDestination,
    "TransferDestinationBlockchainLocation": TransferDestinationBlockchainLocation,
    "TransferDestinationLocation": TransferDestinationLocation,
    "TransferDestinationWalletLocation": TransferDestinationWalletLocation,
    "TransferDetailedTransfer": TransferDetailedTransfer,
    "TransferRequestBlockchainLocation": TransferRequestBlockchainLocation,
    "TransferRequestSourceWalletLocation": TransferRequestSourceWalletLocation,
    "TransferRequestVerifiedBlockchainLocation": TransferRequestVerifiedBlockchainLocation,
    "TransferSourceBlockchainLocation": TransferSourceBlockchainLocation,
    "TransferSourceLocation": TransferSourceLocation,
    "TransferSourceWalletLocation": TransferSourceWalletLocation,
    "UnwithdrawalObject": UnwithdrawalObject,
    "UpdateCardResponse": UpdateCardResponse,
    "Wallet": Wallet,
    "WalletCreationRequest": WalletCreationRequest,
    "WalletLocation": WalletLocation,
    "Wire": Wire,
    "WireCreationRequest": WireCreationRequest,
    "WireCreationRequestAccountNumber": WireCreationRequestAccountNumber,
    "WireCreationRequestIban": WireCreationRequestIban,
    "WireCreationRequestUS": WireCreationRequestUS,
    "WireInstruction": WireInstruction,
    "WireInstructionBeneficiary": WireInstructionBeneficiary,
    "WireInstructionBeneficiaryBank": WireInstructionBeneficiaryBank,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);

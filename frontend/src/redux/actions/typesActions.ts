import { ThunkDispatch } from "redux-thunk";
import { ITopup, ITransaction, ITransfer, IUser } from "../../interface";
import { AnyAction } from "redux";
import { ITopupState, ITransactionState, ITransferState, IUserState } from "../reducers/typesReducers";

// User Actions
export enum UserActionType {
    SET_USER = "SET_USER",
    SET_USER_LOADING = "SET_USER_LOADING",
    SET_USER_ERROR = "SET_USER_ERROR",
}

export interface ISetUser {
    type: UserActionType.SET_USER;
    payload: IUser
}

export interface ISetUserLoading {
    type: UserActionType.SET_USER_LOADING;
    payload: boolean
}

export interface ISetUserError {
    type: UserActionType.SET_USER_ERROR;
    payload: string | null
}

export type UsersAction = ISetUser | ISetUserLoading | ISetUserError
export type UsersDispatch = ThunkDispatch<IUserState, any, AnyAction>

// Transactions Actions
export enum TransactionsActionType {
    SET_TRANSACTIONS = "SET_TRANSACTIONS",
    SET_TRANSACTIONS_LOADING = "SET_TRANSACTIONS_LOADING",
    SET_TRANSACTIONS_ERROR = "SET_TRANSACTIONS_ERROR",
}
export interface ISetTransactions {
    type: TransactionsActionType.SET_TRANSACTIONS;
    payload: ITransaction[]
}

export interface ISetTransactionsLoading {
    type: TransactionsActionType.SET_TRANSACTIONS_LOADING;
    payload: boolean
}

export interface ISetTransactionsError {
    type: TransactionsActionType.SET_TRANSACTIONS_ERROR;
    payload: string | null
}

export type TransactionsAction = ISetTransactions | ISetTransactionsLoading | ISetTransactionsError
export type TransactionsDispatch = ThunkDispatch<ITransactionState, any, AnyAction>

// Transfer Actions
export enum TransferActionType {
    SET_TRANSFER = "SET_TRANSFER",
    SET_TRANSFER_LOADING = "SET_TRANSFER_LOADING",
    SET_TRANSFER_ERROR = "SET_TRANSFER_ERROR",
}

export interface ISetTransfer {
    type: TransferActionType.SET_TRANSFER;
    payload: ITransfer
}

export interface ISetTransferLoading {
    type: TransferActionType.SET_TRANSFER_LOADING;
    payload: boolean
}

export interface ISetTransferError {
    type: TransferActionType.SET_TRANSFER_ERROR;
    payload: string | null
}

export type TransferAction = ISetTransfer | ISetTransferLoading | ISetTransferError
export type TransferDispatch = ThunkDispatch<ITransferState, any, AnyAction>


// Topup Actions
export enum TopupActionType {
    SET_TOPUP = "SET_TOPUP",
    SET_TOPUP_LOADING = "SET_TOPUP_LOADING",
    SET_TOPUP_ERROR = "SET_TOPUP_ERROR",
}

export interface ISetTopup {
    type: TopupActionType.SET_TOPUP;
    payload: ITopup
}

export interface ISetTopupLoading {
    type: TopupActionType.SET_TOPUP_LOADING;
    payload: boolean
}

export interface ISetTopupError {
    type: TopupActionType.SET_TOPUP_ERROR;
    payload: string | null
}

export type TopupAction = ISetTopup | ISetTopupLoading | ISetTopupError
export type TopupDispatch = ThunkDispatch<ITopupState, any, AnyAction>
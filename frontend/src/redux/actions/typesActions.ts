import { ThunkDispatch } from "redux-thunk";
import { ITransaction, IUser } from "../../interface";
import { AnyAction } from "redux";
import { ITransactionState, IUserState } from "../reducers/typesReducers";

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
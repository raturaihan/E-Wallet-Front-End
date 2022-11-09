import { Dispatch } from "react";
import instance from "../../config/axios";
import { ITransaction, IUser } from "../../interface";
import { TransactionsAction, TransactionsActionType, UserActionType, UsersAction } from "./typesActions";

export const getTransactions = (payload: ITransaction[])
:TransactionsAction => {
    return{type: TransactionsActionType.SET_TRANSACTIONS, payload}
};

export const getTransactionsLoading = (payload: boolean)
:TransactionsAction => {
    return{type: TransactionsActionType.SET_TRANSACTIONS_LOADING, payload}
};

export const getTransactionsError = (payload: string | null)
:TransactionsAction => {
    return{type: TransactionsActionType.SET_TRANSACTIONS_ERROR, payload}
};

export const getAllTransactions = () => {
    return async(dispatch: Dispatch<TransactionsAction>) => {
        dispatch(getTransactionsLoading(true))
        dispatch(getTransactionsError(null))

        await instance.get("/transactions")
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch user data')
            }
            return response.data
        })
        .then((data) => {
            dispatch(getTransactions(data))
        })
        .catch((error) => dispatch(getTransactionsError(error)))
        .finally(() => dispatch(getTransactionsLoading(false)));
    }   
}
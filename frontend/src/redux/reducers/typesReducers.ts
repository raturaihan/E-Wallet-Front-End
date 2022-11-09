import { ITransaction, IUser } from "../../interface";
export interface IUserState {
    user: IUser;
    userLoading: boolean;
    userError: string | null;
}

export interface ITransactionState {
    transactions: ITransaction[];
    transactionsLoading: boolean;
    transactionsError: string | null;
}
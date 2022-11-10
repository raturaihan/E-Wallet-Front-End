import { ITopup, ITransaction, ITransfer, IUser } from "../../interface";
export interface IUserState {
    user: IUser;
    userLoading: boolean;
    userError: string | null;
}

export interface ITransactionState {
    transactions: ITransaction[];
    transactionsLoading: boolean;
    transactionsError: string;
}

export interface ITransferState {
    transfer: ITransfer;
    transferLoading: boolean;
    transferError: string;
}

export interface ITopupState {
    topup: ITopup;
    topupLoading: boolean;
    topupError: string;
}
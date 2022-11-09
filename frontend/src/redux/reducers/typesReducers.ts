import { ITopup, ITransaction, ITransfer, IUser } from "../../interface";
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

export interface ITransferState {
    transfer: ITransfer;
    transferLoading: boolean;
    transferError: string | null;
}

export interface ITopupState {
    topup: ITopup;
    topupLoading: boolean;
    topupError: string | null;
}
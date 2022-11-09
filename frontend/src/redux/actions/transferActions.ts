import { Dispatch } from "react";
import instance from "../../config/axios";
import { ITransfer } from "../../interface";
import { TransferAction, TransferActionType } from "./typesActions";

export const setTransfer = (payload: ITransfer)
:TransferAction => {
    return{type: TransferActionType.SET_TRANSFER, payload}
}; 

export const setTransferLoading = (payload: boolean)
:TransferAction => {
    return{type: TransferActionType.SET_TRANSFER_LOADING, payload}
};  

export const setTransferError = (payload: string | null)
:TransferAction => {
    return{type: TransferActionType.SET_TRANSFER_ERROR, payload}
}; 

export const postTransfer = (payload: ITransfer) => {
    return async(dispatch:Dispatch<TransferAction>) => {
        dispatch(setTransferLoading(true))
        dispatch(setTransferError(null))

        await instance.post("/transactions/transfer",payload)
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to transfer')
            }
            return response.data
        })
        .catch((error) => dispatch(setTransferError(error)))
        .finally(() => dispatch(setTransferLoading(false)));
    }   
}

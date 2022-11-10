import { TransferAction, TransferActionType } from "../actions/typesActions";
import { ITransferState } from "./typesReducers";

const initialState: ITransferState= {
    transfer: {
        to: '',
        amount: 0, 
        description: ""
    },
    transferLoading: true, 
    transferError: ""
}

export default function transferReducer(state = initialState, action:TransferAction)
:ITransferState {
    switch(action.type){
        case TransferActionType.SET_TRANSFER:
            return{...state, transfer: action.payload};
        case TransferActionType.SET_TRANSFER_LOADING:
            return{...state, transferLoading: action.payload};
        case TransferActionType.SET_TRANSFER_ERROR:
            return{...state, transferError: action.payload};
        default:
            return state;
    }
}
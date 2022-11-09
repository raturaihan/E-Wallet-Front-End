import { TransactionsAction, TransactionsActionType } from "../actions/typesActions";
import { ITransactionState } from "./typesReducers";

const initialState: ITransactionState = {
    transactions: [],
    transactionsLoading: true,
    transactionsError: null,
}

export default function transactionsReducer(state = initialState, action:TransactionsAction)
:ITransactionState {
    switch(action.type) {
        case TransactionsActionType.SET_TRANSACTIONS:
            return{...state, transactions: action.payload}
        case TransactionsActionType.SET_TRANSACTIONS_LOADING:
            return{...state, transactionsLoading: action.payload}
        case TransactionsActionType.SET_TRANSACTIONS_ERROR:
            return{...state, transactionsError: action.payload}
        default:
            return state
    }
}
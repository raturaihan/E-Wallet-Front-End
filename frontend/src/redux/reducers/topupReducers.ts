import { TopupAction, TopupActionType} from "../actions/typesActions";
import { ITopupState} from "./typesReducers";

const initialState: ITopupState= {
    topup: {
        amount: 0, 
        source_of_fund_id: 0,
    },
    topupLoading: true, 
    topupError: null
}

export default function topupReducer(state = initialState, action:TopupAction)
:ITopupState {
    switch(action.type){
        case TopupActionType.SET_TOPUP:
            return{...state, topup: action.payload};
        case TopupActionType.SET_TOPUP_LOADING:
            return{...state, topupLoading: action.payload};
        case TopupActionType.SET_TOPUP_ERROR:
            return{...state, topupError: action.payload};
        default:
            return state;
    }
}
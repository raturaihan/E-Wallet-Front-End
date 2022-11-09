import { UserActionType, UsersAction } from "../actions/typesActions";
import { IUserState } from "./typesReducers";

const initialState: IUserState ={
    user: {
        name: "",
        email: "",
        wallet_number: "", 
        balance: 0
    },
    userLoading: true,
    userError: null
}

export default function userReducer(state = initialState, action:UsersAction)
:IUserState {
    switch(action.type) {
        case UserActionType.SET_USER:
            return{...state, user: action.payload};
        case UserActionType.SET_USER_LOADING:
            return{...state, userLoading: action.payload};
        case UserActionType.SET_USER_ERROR:
            return{...state, userError: action.payload}; 
        default:
            return state;
    }
}
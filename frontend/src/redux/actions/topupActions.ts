import { Dispatch } from "react";
import instance from "../../config/axios";
import { ITopup} from "../../interface";
import { TopupAction, TopupActionType} from "./typesActions";

export const setTopup = (payload: ITopup)
:TopupAction => {
    return{type: TopupActionType.SET_TOPUP, payload}
}; 

export const setTopupLoading = (payload: boolean)
:TopupAction => {
    return{type: TopupActionType.SET_TOPUP_LOADING, payload}
};  

export const setTopupError = (payload: string | null)
:TopupAction => {
    return{type: TopupActionType.SET_TOPUP_ERROR, payload}
}; 

export const postTopup = (payload: ITopup) => {
    return async(dispatch:Dispatch<TopupAction>) => {
        dispatch(setTopupLoading(true))
        dispatch(setTopupError(null))

        await instance.post("/transactions/top-up",payload)
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to top up')
            }
            return response.data
        })
        .catch((error) => dispatch(setTopupError(error)))
        .finally(() => dispatch(setTopupLoading(false)));
    }   
}
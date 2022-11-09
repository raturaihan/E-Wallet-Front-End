import { Dispatch } from "react";
import instance from "../../config/axios";
import { IUser } from "../../interface";
import { UserActionType, UsersAction } from "./typesActions";

export const getUser = (payload: IUser)
:UsersAction => {
    return{type: UserActionType.SET_USER, payload}
};

export const getUserLoading = (payload: boolean)
:UsersAction => {
    return{type: UserActionType.SET_USER_LOADING, payload}
};

export const getUserError = (payload: string | null)
:UsersAction => {
    return{type: UserActionType.SET_USER_ERROR, payload}
};

export const getProfileUser = () => {
    return async(dispatch: Dispatch<UsersAction>) => {
        dispatch(getUserLoading(true))
        dispatch(getUserError(null))

        await instance.get("/profiles")
        .then((response) => {
            if(!response.data){
                throw new Error('Failed to fetch user data')
            }
            return response.data
        })
        .then((data) => {
            let userData = {
                name: data.name,
                email: data.email,
                wallet_number: data.wallet_number,
                balance: data.balance,
            }
            dispatch(getUser(userData))
        })
        .catch((error) => dispatch(getUserError(error)))
        .finally(() => dispatch(getUserLoading(false)));
    }   
}
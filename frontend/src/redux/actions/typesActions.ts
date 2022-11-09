import { ThunkDispatch } from "redux-thunk";
import { IUser } from "../../interface";
import { AnyAction } from "redux";
import { IUserState } from "../reducers/typesReducers";

export enum UserActionType {
    SET_USER = "SET_USER",
    SET_USER_LOADING = "SET_USER_LOADING",
    SET_USER_ERROR = "SET_USER_ERROR",
}

export interface ISetUser {
    type: UserActionType.SET_USER;
    payload: IUser
}

export interface ISetUserLoading {
    type: UserActionType.SET_USER_LOADING;
    payload: boolean
}

export interface ISetUserError {
    type: UserActionType.SET_USER_ERROR;
    payload: string | null
}

export type UsersAction = ISetUser | ISetUserLoading | ISetUserError
export type UsersDispatch = ThunkDispatch<IUserState, any, AnyAction>
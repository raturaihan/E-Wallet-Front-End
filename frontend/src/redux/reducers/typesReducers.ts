import { IUser } from "../../interface";


export interface IUserState {
    user: IUser;
    userLoading: boolean;
    userError: string | null;
}
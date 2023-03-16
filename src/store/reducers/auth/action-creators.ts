import {AuthActionEnum, SetUserAction} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import axios from "axios";
import UserService from "../../../api/UserService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsLoading: (payload: boolean) => ({type: AuthActionEnum.SET_IS_LOADING,payload}),
    setIsAuth: (auth: boolean) => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setError: (error: string) => ({type: AuthActionEnum.SET_ERROR,payload: error,}),
    login: (username:string,password: string) => async (dispatch: AppDispatch) => {
        try{
            // @ts-ignore
            dispatch(AuthActionCreators.setIsLoading(true));
            setTimeout(async () => {
                    const response = await UserService.getUsers();
                    const mockUser = response.data.find(user => user.username === username && user.password === password);
                    console.log(mockUser)
                    if(mockUser) {
                        localStorage.setItem('auth','true');
                        localStorage.setItem('username',mockUser.username);
                        // @ts-ignore
                        dispatch(AuthActionCreators.setUser(mockUser));
                        // @ts-ignore
                        dispatch(AuthActionCreators.setIsAuth(true));

                    }
                    else{
                        // @ts-ignore
                        dispatch(AuthActionCreators.setError("Пользователь не найден"));
                    }
                    // @ts-ignore
                    dispatch(AuthActionCreators.setIsLoading(false));
                },
                1000)

        }

        catch (e) {
            // @ts-ignore
            dispatch(AuthActionCreators.setError("Произошла ошибка при логине"));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        try{
            localStorage.removeItem('auth');
            localStorage.removeItem('username');
            dispatch(AuthActionCreators.setUser({} as IUser))
            // @ts-ignore
            dispatch(AuthActionCreators.setIsAuth(false));
        }
        catch (e) {

        }
    }
    }

import { createContext, useState } from "react";
import {API_URL} from './http/index.js'
import axios from "axios";
import AuthController from "./auth.controller";


export const AuthContext = createContext(null);

export default function AuthProvider({children}) {
    const [isAuth,setIsAuth] = useState(false);
    const [isAuthLoading,setIsAuthLoading] = useState(true);
    const [user,setUser] = useState(null);
    
    const login = async (email,password) => {
        let errorMessage;
        try {
            setIsAuthLoading(true);
            const response = await AuthController.login(email,password);
            console.log('response',response)
            localStorage.setItem('token',(response).data.accessToken);
            setIsAuth(true);
            console.log(response)
        } catch(err) {
            console.log(err.response?.data?.message);
            errorMessage = err.response?.data?.message;
        } finally {
            setIsAuthLoading(false);
        }
        return errorMessage ? errorMessage : null;
        
    }

    const logout = async () => {
        try {
            setIsAuthLoading(true);
            await AuthController.logout();
            localStorage.removeItem('token');
            setIsAuth(false);
        } catch(err) {
            console.log(err.response?.data?.message);
        } finally {
            setIsAuthLoading(false);
        }
    }

    const reg = async (email,password,birthday,name) => {
        let errorMessage;
        try {
            setIsAuthLoading(true);
            const response = await AuthController.registration(email,password,birthday,name);
            localStorage.setItem('token',(response).data.accessToken);
            setIsAuth(true);
            console.log(response);
        } catch(err) {
            console.log(err.response?.data?.message);
            errorMessage = err.response?.data?.message;
        } finally {
            setIsAuthLoading(false);
        }
        return errorMessage ? errorMessage : null;
    };

    const checkAuth = async () => {
        try {
            setIsAuthLoading(true);
            const response = await axios.post(API_URL + '/refresh',undefined,{withCredentials: true});
            localStorage.setItem('token',(response).data.accessToken);
            setIsAuth(true);
        } catch(err) {
            console.log(err.response?.data?.message);
        } finally {
            setIsAuthLoading(false);
        }
    }

    return <AuthContext.Provider value={{login,logout,reg,checkAuth,isAuth,isAuthLoading}}>
            {children}
           </AuthContext.Provider>
}
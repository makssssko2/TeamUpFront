import { createContext, useState } from "react";
import { API_URL } from "./http/index.js";
import axios from "axios";
import AuthController from "./auth.controller";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        let errorMessage;
        try {
            setIsAuthLoading(true);
            const response = await AuthController.login(email, password);
            console.log("response", response);
            localStorage.setItem("token", response.data.token);
            setUser(response.data.user);
            setIsAuth(true);
        } catch (err) {
            console.log(err);
            errorMessage =
                err?.response?.status === 400
                    ? "Неверный email или пароль"
                    : null;
        } finally {
            setIsAuthLoading(false);
        }
        return errorMessage ? errorMessage : null;
    };

    const logout = async () => {
        try {
            setIsAuthLoading(true);
            await AuthController.logout();
            localStorage.removeItem("token");
            setIsAuth(false);
        } catch (err) {
            console.log(err);
        } finally {
            setIsAuthLoading(false);
        }
    };

    const reg = async (email, password, surname, name) => {
        let errorMessage;
        try {
            setIsAuthLoading(true);
            const response = await AuthController.registration(
                email,
                password,
                surname,
                name
            );
            console.log(response);
            localStorage.setItem("token", response.data.token);
            setUser(response.data.user);
            setIsAuth(true);
        } catch (err) {
            console.log(err);
            errorMessage =
                err.response.status === 400
                    ? "Пользователь с таким email уже существует"
                    : null;
        } finally {
            setIsAuthLoading(false);
        }
        return errorMessage ? errorMessage : null;
    };

    const checkAuth = async () => {
        try {
            setIsAuthLoading(true);
            const response = await axios.post(API_URL + "/refresh", undefined, {
                withCredentials: true,
            });
            localStorage.setItem("token", response.data.token);
            setUser(response.data.user);
            setIsAuth(true);
        } catch (err) {
            console.log(err);
        } finally {
            setIsAuthLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                login,
                logout,
                reg,
                checkAuth,
                isAuth,
                isAuthLoading,
                user,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

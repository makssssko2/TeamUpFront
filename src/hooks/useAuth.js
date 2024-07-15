import { useContext } from "react";
import { AuthContext } from "../controller/AuthStore";
export default function useAuth() {
    return useContext(AuthContext);
}

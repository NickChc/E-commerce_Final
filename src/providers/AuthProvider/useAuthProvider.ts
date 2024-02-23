import { useContext } from "react";
import { AuthContext } from "@src/providers/AuthProvider";



export function useAuthProvider() {
    const { ...data } = useContext(AuthContext);

    return { ...data };
}
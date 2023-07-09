import { Children, useState } from "react"
import {useApi} from "../../hooks/useApi"
import { User } from "../../types/User"
import { AuthContext } from "./AuthContext"

export const AuthProvider = ({children}: {children: JSX.Element}) => {

    const [user, setUser] = useState<User | null>(null);
    const api = useApi();
    const signin = async (email: string, password: string) => {
        const data = await api.signin(email, password); 
        if(data.user && data.token) setUser(data.user); return true;
        return false;
        
    }
    const register = async(firstName: string, lastName: string, password: string, email: string) => {
        const data = await api.register(firstName, lastName, password, email);
        if(data.user && data.token) setUser(data.user); return true;
    }
    const signout = async () => {
        await api.logout();
        return setUser(null);
    }
    return(
        <AuthContext.Provider value={{user, signin, register, signout}}>
            {children}
        </AuthContext.Provider>
    )
}
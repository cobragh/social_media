import { useContext } from "react"
import { Login } from "../../pages/Login";
import { AuthContext } from "./AuthContext"
import { AuthProvider } from "./AuthProvider"

export const RequireAuth = ({children}: {children: JSX.Element}) => {
   const auth = useContext(AuthContext);

   if(!auth.user) return <Login/>

   return children;
}
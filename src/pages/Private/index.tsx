import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () => {
    const auth = useContext(AuthContext)
    return(
        <div>        
            <button onClick={auth.signout}>Logout</button>
            </div>

    )
}
import { useContext } from "react"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Private = () => {
    const auth = useContext(AuthContext)
    return(
        <div>       
            <h2>Página fechada</h2> 
            <button onClick={auth.signout}>Logout</button>
        </div>

    )
}
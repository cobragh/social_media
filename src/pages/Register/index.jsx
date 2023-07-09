import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/Auth/AuthContext"

export const Register = () => {
    const auth = useContext(AuthContext)
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        if(email && password && firstName && lastName) {
            const isRegistered = await auth.register(firstName, lastName, email, password);
            if(isRegistered) navigate('/private')
            else{alert('Not registered')}
        }
    }
    return(
        <div>
            <input type="text" value={firstName}
                onChange={e => setFirstName(e.target.value)}
                placeholder="What's your First Name?"
            />    
            <input type="text" value={lastName}
                onChange={e => setLastName(e.target.value)}
                placeholder="What's your Last Name?"
            />    
            <input type="text" value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="What's your E-mail?"
            />    
            <input type="text" value={password} 
                onChange={e => setPassword(e.target.value)}
                placeholder="Digite seu password" 
            />
                <button onClick={handleRegister}>Register</button>   
        </div>
    )
}
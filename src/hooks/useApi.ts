import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API,  
});

export const useApi = () => ({
    validate_token: async (token: string)=> {
        const response = await api.post(' /validate', {token});
        return response.data;   
    },
    signin: async(email: string, password: string) => {
        const response = await api.post('/auth/login', {email, password})
        return response.data;
    }, 
    register: async(firstName: string, lastName: string, password: string, email: string) => {
        const response = await api.post('/auth/register', {firstName, lastName, password, email});
        return response.data;
    },
    logout: async ()=>{
        const response = await api.post('/logout')
        return response.data;
    }
})

import {createContext} from 'react'
import { User } from '../../types/User';

export type AuthContextType = {
    user: User | null;
    signin: (email: string, password: string) => Promise<Boolean>
    register: (firstName: string ,lastName: string, password: string, email: string) => Promise<Boolean>
    signout: () => void;
}
export const AuthContext = createContext<AuthContextType>(null!);
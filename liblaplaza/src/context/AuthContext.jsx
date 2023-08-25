import { createContext, useState, useContext } from "react";
import { registerUserRequest, loginUserRequest } from "../api/auth";

const authContext = createContext();

export const useAuth = () => {
    const context = useContext(authContext)
    if(!context){
        throw new Error('useAuth must be used within a AuthProvider')
    }
    return context;
};

export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    
    const signUp = async (user) => {
        try{
            const res = await registerUserRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        }catch(error){
            setErrors(error.response.data.message);
        }
        
    };

    const signIn = async (user) => {
        try{
            const res = await loginUserRequest(user);
            console.log(res);
        } catch(error){
            console.log(error);
        }
    }
    
    return (
        <authContext.Provider value={{ signUp, signIn, user, isAuthenticated, errors}}>
            {children}
        </authContext.Provider>
    );
};
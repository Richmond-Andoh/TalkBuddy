import { createContext, useState, useEffect, ReactNode, useContext } from "react";
import { loginUser, verifyAuthStatus } from "../helpers/api_communicator";

// Define user type
type User = {
    username: string,
    email: string
}

// Define auth type
type UserAuth = {
    isLoggedIn: boolean;
    user: User | null;
    login: (email: string, password: string) => Promise<void>;  // Function to log in a user.
    register: (username: string, email: string, password: string) => Promise<void> ;   // Function to register a new user.
    logout: () => Promise<void>

}


// create context
const AuthContext = createContext<UserAuth | null>(null);

// create  provider component
export const AuthProvider = ({children}:{ children?:ReactNode})=>{
    const [user, setUser] = useState<User | null > (null);
    const [isLoggedIn, setIsLoggedIn ] = useState(false)

    useEffect(() => {
        // Fetch if the user cookies are valid and skip login
        async function checkStatus() {
            const data = await verifyAuthStatus();
            if(data){
                setUser({email: data.email, username: data.username})
                setIsLoggedIn(true)
            }
        }

        checkStatus();
    }, [])

    const login = async(email: string, password: string) => {
        const data = await loginUser(email, password)
        if(data){
            setUser({email: data.email, username: data.username});
            setIsLoggedIn(true)
        }
    };
    const register = async(_sername: string, email: string, password: string) => {};
    const logout = async() => {};

    const value = {
        user,
        isLoggedIn,
        login,
        register,
        logout
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// create  hook for accessing the values from anywere in your app
export const useAuth = () => useContext(AuthContext);




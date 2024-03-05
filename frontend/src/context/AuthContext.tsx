import { createContext, useState, useEffect, ReactNode, useContext } from "react";

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
    }, [])

    const login = async(_email: string, _password: string) => {};
    const register = async(_username: string, _email: string, _password: string) => {};
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




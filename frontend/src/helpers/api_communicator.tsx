import axios, { AxiosError} from "axios";

// Login communicator function
export const loginUser = async(email: string, password: string) => {
    try {
        const res = await axios.post("/user/login", { email, password }, { timeout: 5000});
    if (res.status !== 200) {
        throw new Error("Unable to Login user");
    }

    // Else continue with login
    const data = res.data; // Remove the parentheses here
    return data;
    } catch (error) {
        
        // handle error
        if(axios.isAxiosError(error)){
            const axiosError = error as AxiosError;
            console.log(`Request failed with status code ${axiosError.code}`);
        }

        throw new Error("An Error occured while trying to login")
    }
};

export const verifyAuthStatus = async() => {
    const res = await axios.get("/user/auth-status");
    if (res.status !== 200) {
        throw new Error("Unable to Login user");
    }

    // Else continue with login
    const data = res.data; // Remove the parentheses here
    return data;
    
};
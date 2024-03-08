import axios from "axios";

// Login communicator function

export const loginUser = async(email: string, Password: string) => {
    const response = await axios.post("/user/login", {email, Password})
    if(response.status !== 200){
        throw new Error("Unable to Login user")
    }

    // continue with login
    const data = await response.data;
    return data;
}
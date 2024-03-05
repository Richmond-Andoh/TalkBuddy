import mongoose from "mongoose"

const dbconnection = async () => {
    try {
        await mongoose.connect("mongodb+srv://richy:richy123@talkbuddy.oy6na7t.mongodb.net/");
        console.log("Database Connected Successfully!");
    } catch (error) {
        console.error(`Error Connecting to Database : ${error}`);
        
    }
}

export const dbDisconnection =async () => {
    try {
        await mongoose.disconnect()
    } catch (error) {
        
    }
    
}

export default dbconnection;
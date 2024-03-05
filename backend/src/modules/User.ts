import mongoose, { model } from "mongoose";
import Chat from "./Chats.js";

const userSchema = new mongoose.Schema({
   username: {
    type: String,
    required: true
   },
   
   email: {
    type: String,
    unique: true,
    required: true
   },
   password: {
    type: String,
    required: true
   },

   chats: [Chat.schema] // Chat has it own Schema
})

const User = mongoose.model("User", userSchema)

export default User
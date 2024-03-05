import express from  'express';
import userRoute from './userRoute.js';
import chatRoute from './chatRoute.js';

const appRoute = express.Router()

appRoute.use("/user", userRoute)
appRoute.use("/chats", chatRoute)


export default  appRoute;
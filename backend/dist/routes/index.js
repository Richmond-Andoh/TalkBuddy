import express from 'express';
import userRoute from './user.js';
const appRoute = express.Router();
appRoute.use("/user", userRoute);
export default appRoute;
//# sourceMappingURL=index.js.map
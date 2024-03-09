import express from "express";
import { getAllUsers, loginUser, verifyUser, registerUser } from "../controllers/userController.js";
import { loginValidator, registerValidator, validate } from "../utils/validators.js";
import { verifyToken } from "../utils/token.js";
const userRoute = express.Router();
userRoute.get("/", getAllUsers);
userRoute.post("/register", validate(registerValidator), registerUser);
userRoute.post("/login", validate(loginValidator), loginUser);
userRoute.get("/auth-status", verifyToken, verifyUser);
export default userRoute;
//# sourceMappingURL=userRoute.js.map
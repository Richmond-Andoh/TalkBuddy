import express from "express";
import { getAllUsers, loginUser, registerUser } from "../controllers/userController.js";
import { loginValidator, registerValidator, validate } from "../utils/validators.js";
const userRoute = express.Router();
userRoute.get("/", getAllUsers);
userRoute.post("/register", validate(registerValidator), registerUser);
userRoute.post("/login", validate(loginValidator), loginUser);
export default userRoute;
//# sourceMappingURL=userRoute.js.map
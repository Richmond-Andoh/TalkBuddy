import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dbconnection from "./db/dbconnection.js";
import appRoute from "./routes/indexRoute.js";
const app = express();
dbconnection();
const PORT = process.env.PORT || 8000;
dotenv.config();
// Middlewares
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// Remove from production
app.use(morgan("dev"));
app.use("/api/v1", appRoute);
app.listen(PORT, () => {
    console.log(`Server Opened on Port ${PORT}`);
});
//# sourceMappingURL=index.js.map
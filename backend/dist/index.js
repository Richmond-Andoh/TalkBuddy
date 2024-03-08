import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import dbconnection from "./db/dbconnection.js";
import appRoute from "./routes/indexRoute.js";
import cors from "cors";
const app = express();
dbconnection();
const PORT = process.env.PORT || 8000;
dotenv.config();
// Middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));
// Remove from production
app.use(morgan("dev"));
app.use("/api/v1", appRoute);
app.listen(PORT, () => {
    console.log(`Server Opened on Port ${PORT}`);
});
//# sourceMappingURL=index.js.map
import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"
import { COOKIE_NAME } from "./cookieName.js"

// const createToken = (res, userId) => {
//     const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "25d"})

//     res.cookie("jwt", token, {
//         httpOnly: true,
//         sameSite: "strict"
//     })
// }

const createToken = (id: string, email: string, expiresIn) => {
    // define payloads
    const payloads = {id, email}
 
    // create token
    const token = jwt.sign(payloads, process.env.JWT_SECRET, {
        expiresIn
    })

    return token;
}

export const verifyToken = async(req: Request, res: Response, next: NextFunction) => {
    
    const token = req.signedCookies[`${COOKIE_NAME}`]
    if(!token || token.trim() === ""){
        return res.status(401).json({Message: "Token not found"})
    }
    return new Promise<void>((resolve, reject) => {
        return jwt.verify(token, process.env.JWT_SECRET, (err, success) => {
            if(err){
                reject(err.message)
                return  res.status(401).json({Message: "Token expired"})
            } else {
                resolve();
                console.log("Token verification successful")
                res.locals.jwtData = success;
                return next();
            }
        })
    })
    console.log(token);
}

export default createToken;
import jwt from "jsonwebtoken";
import { COOKIE_NAME } from "./cookieName.js";
// const createToken = (res, userId) => {
//     const token = jwt.sign({userId}, process.env.JWT_SECRET, { expiresIn: "25d"})
//     res.cookie("jwt", token, {
//         httpOnly: true,
//         sameSite: "strict"
//     })
// }
const createToken = (id, email, expiresIn) => {
    // define payloads
    const payloads = { id, email };
    // create token
    const token = jwt.sign(payloads, process.env.JWT_SECRET, {
        expiresIn
    });
    return token;
};
export const verifyToken = async (req, res, next) => {
    const token = req.signedCookies[`${COOKIE_NAME}`];
    console.log(token);
};
export default createToken;
//# sourceMappingURL=token.js.map
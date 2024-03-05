import jwt from "jsonwebtoken";
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
export default createToken;
//# sourceMappingURL=token.js.map
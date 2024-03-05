import User from "../modules/User.js"
import bcrypt from "bcrypt"
import createToken from "../utils/token.js"
import { COOKIE_NAME } from "../utils/cookieName.js";

export const getAllUsers = async(req, res, next) => {
    try {
        const user = await User.find();
        if(!user){
            throw new Error("There is no user in the database");
        }

        return res.status(200).json({Message: "Available users", user});
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({Error: error.message});
    }
}


export const registerUser = async(req, res, next) => {
    try {
        const {username, email, password} = req.body;

        // check for empty fields
        if (!username || !email || !password) {
            throw new Error('Please all fields  are required');
        }
        
        // check for user existence
        const userExist = await User.findOne({email});
        if(userExist) {
            throw new Error ('Email already exist');
        }

        // hash password before sending to database 
        const saltRound = await bcrypt.genSalt(10);
        const hashPassword = await  bcrypt.hash(password, saltRound);

        // create a new user with mongoose method
        const newUser =  new User({username, email, password: hashPassword});
        await newUser.save();
        // create token for user after successful reqistration
        // createToken(res, newUser._id);

        //clear previous cookie
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true
        })


        // create token and store cookie
        const token = createToken(userExist.id, userExist.email, "7d")
        const expires = new Date()
        expires.setDate(expires.getDate() + 7);
        res.cookie("auth_token", token, { 
            path: "/", 
            domain:"localhost",
            expires,
            httpOnly: true,
            signed: true
        })



        // send response after successful registration
        return res.status(201).json({Message: "User registered successfully",
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
            password: newUser.password
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({Message: "Internal Server Error"});
    }
}

export const loginUser = async(req, res, next) => {
    try{
        const { email, password } = req.body;

        // check whether is reqistered or not
        const registeredUser = await User.findOne({ email })
        if(!registeredUser) return res.status(401).send("User not registered");

        // check for password validity
        const isPasswordValid = await bcrypt.compare(password, registeredUser.password)
        if(!isPasswordValid) return res.status(403).send("Passord is not correct");
         
        // Send token along  with the response
        // createToken(res, registeredUser._id)
        // proceed to login

        //clear previous cookie
        res.clearCookie(COOKIE_NAME, {
            path: "/",
            domain: "localhost",
            httpOnly: true,
            signed: true
        })


        // create token and store cookie
        const token = createToken(registeredUser.id, registeredUser.email, "7d")
        const expires = new Date()
        expires.setDate(expires.getDate() + 7);
        res.cookie("auth_token", token, { 
            path: "/", 
            domain:"localhost",
            expires,
            httpOnly: true,
            signed: true
        })


        return res.status(200).json({ Message: "Login Successful",
           _id: registeredUser._id, 
           username: registeredUser.username,
           email: registeredUser.email,
           password: registeredUser.password
    });

    } 
    catch(error){
        console.log(error.message);
        return res.status(403).json({ Error: "Invalid Credentials" });
    }
}
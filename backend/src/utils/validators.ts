import { NextFunction, Request, Response} from "express"
import { body, ValidationChain, validationResult } from "express-validator"

export const validate = (validations: ValidationChain[]) => {
    return async(req: Request, res: Response, next: NextFunction) => {
        for(let validation of validations){
            const result = await validation.run(req)
            if(!result.isEmpty()){
                break;
            }
        }

        // check for errors
        const errors = validationResult(req);
        if(errors.isEmpty()){
            return next();
        }

        return res.status(422).json({ errors: errors.array() })
    }
};

export const loginValidator = [
    body("email").trim().isEmail().notEmpty().withMessage("Email is require"),
    body("password").notEmpty().trim().isLength({min: 8}).withMessage("Password must be eight or above in length")
]

export const registerValidator = [
    body("username").notEmpty().withMessage("Username is required"),
    ...loginValidator
]
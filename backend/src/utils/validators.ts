// Input validation etc
import { Request, Response, NextFunction } from "express";
import { body, ValidationChain, validationResult } from "express-validator";
 
const validate = (validations: ValidationChain[]) => {
    return async (req: Request, res: Response, next: NextFunction) => {
        for (let validation of validations) {
        }
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            return next();
            }
            return res.status(422).json({ errors: errors.array() });
            /*const result = await validation.run(req);
            if (!result.isEmpty()) {
                break 
            }
            */
        }
    };


const loginValidator = [
    body('email').trim().isEmail().withMessage("Please enter a valid email"),
    body('password').trim()
    .isLength({min: 6})
    .withMessage("Please choose a stronger password > 6 chars")
];

const signUpValidator = [
    body('name').notEmpty().withMessage("Name is required"),
    ...loginValidator
];

export { validate, signUpValidator, loginValidator };
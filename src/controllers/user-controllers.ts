// Handling user requests
import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import { hash, compare } from "bcrypt"; 

//Get all Users
export const getAllUsers = async (req: Request, 
                                  res: Response, 
                                  next: NextFunction):Promise<Response> => {
    try {
         // Get all users from MongoDB
         const users = await User.find(); 
         return res.status(200).json({message: "OK", users });    
    } catch (error) {
     console.log(error);
     return res.status(500).json({message: "ERROR", cause:error.message});
    }
}

export const userLogin = async (req: Request, 
                                res: Response, 
                                next: NextFunction
):Promise <Response> => {
     try {
     //user login
          console.log("Attempting login...");
          const { email, password } = req.body;
          const user = await User.findOne({ email });
          if (!user) {
               return res.status(500).send("User not registered");
          }
          const isPasswordCorrect = await compare(password, user.password);
          if (!isPasswordCorrect) {
               return res.status(500).send("Invalid password");
          }
          
          return res.status(200).json({message: "OK", id:user._id.toString() });    
     } catch (error) {
          console.log(error);
          return res.status(500).json({message: "ERROR!", cause: error.message});
          }
}

export const userSignup = async (req: Request, 
                              res: Response, 
                              next: NextFunction
):Promise<Response> => {
     try {
     //user signup
          console.log("Beginning signup");
          const { name, email, password } = req.body;
          console.log(email);
          const existingUser = await User.findOne({ email });
          console.log(existingUser);
          if(existingUser) return res.status(401).send("User already exists");
          const hashedPassword = await hash(password, 10);
          const user = new User({ name, email, password: hashedPassword });
          await user.save(); 
          return res.status(201).json({message: "OK", id: user._id.toString() });    
     } catch (error) {
          console.log(error);
          return res.status(500).json({message: "ERROR", cause: error.message});
          }


}

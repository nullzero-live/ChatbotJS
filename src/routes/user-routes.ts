// API Routes for USER

 import { Router } from "express";
 import { getAllUsers, userSignup, userLogin } from "../controllers/user-controllers.js"
 import { signUpValidator, 
        loginValidator, 
        validate } from "../utils/validators.js"

 const userRoutes = Router();

 userRoutes.get("/", getAllUsers);
 userRoutes.post("/signup", validate(signUpValidator), userSignup);
 userRoutes.post("/login", validate(loginValidator), userLogin);

 export default userRoutes;
  


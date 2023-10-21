import express from "express";

const app = express();

// GET, POST, DELETE, PUT



app.get("/hello", (req, res, next) => {
  return res.send("Hello");
  
});

app.listen(5001, () => console.log("Server is open on port 5001"));
   
 

import app from "./app.js"
import { connectToDatabase } from "./db/connection.js";
import * as dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 64591;
console.log("Connecting to Database and starting app...")

//connection and listeners
connectToDatabase()
.then(() => {
    console.log("Starting app")
    app.listen(PORT, () => console.log("Server is open on port "+PORT));
  })
  .catch( (err) => console.log(err));

 
  /*
  
  process.on('SIGINT', () => {
    server.close(() => {
      console.log('\nGracefully shutting down from SIGINT (Ctrl+C)');
      console.log('Server closed!!');
      process.exit(0);
    });
  });
  
  process.on('SIGUSR2', () => {
    server.close(() => {
        process.kill(process.pid, 'SIGUSR2');
    });
  });
  */




 




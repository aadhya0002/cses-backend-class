//Package Imports
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
// import morgan from 'morgan'; === used for logging requests, errors, etc.

//There are advanced packeges like helmet, compression, multer, etc. that can be used for security, performance, file storage and passing, etc.

//File Imports
import connectDB from "./config/db.config.js";
import routes from "./routes/route.js";

//Loading of Modules or Env Variables
const app = express();

//Connection to the Database
connectDB();

//Setting up all Middlewares
//Middlewares are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle.
//The next middleware function is commonly denoted by a variable named next.
//Middleware functions can perform the following tasks:
//Execute any code.
//Make changes to the request and the response objects.
//End the request-response cycle.
//Call the next middleware function in the stack.
// Middlewares are like a layer between the client and the server. They are used to perform operations on the request and response objects before sending them to the server or client.

app.use(cors());
app.use(express.json());
// app.use(morgan('dev'));
//BodyParser is used to parse the incoming request body. It is available in Express.js by default.
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

//Setting up all Routes
app.use("/api/", routes);

export default app;

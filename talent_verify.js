// Import necessary libraries and modules
import express from 'express'; // Express framework for building the API
import mysql from 'mysql'; // MySQL database library
import cors from 'cors'; // Middleware for handling Cross-Origin Resource Sharing
import cookieParser from 'cookie-parser'; // Middleware for parsing cookies
import bcrypt from 'bcrypt'; // Library for hashing passwords
import jwt from 'jsonwebtoken'; // Library for JSON Web Tokens
import multer from 'multer'; // Middleware for handling file uploads
import path from 'path'; // Node.js module for working with file paths

// Create an instance of the Express application
const app = express();

// Configure CORS to allow requests from a specific origin with specified methods and credentials
app.use(cors({
    origin: ["http://localhost:5173"], // Allowed origin
    methods: ["POST", "GET", "PUT"], // Allowed HTTP methods
    credentials: true // Enable credentials (cookies)
}));

// Use cookie-parser middleware to parse cookies in HTTP requests
app.use(cookieParser());

// Parse incoming JSON data in HTTP requests
app.use(express.json());

// Serve static files from the 'public' directory (e.g., images)
app.use(express.static('public'));

// Create a MySQL database connection
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "signup"
})

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images') // Destination directory for uploaded files
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Generate a unique filename
    }
})

const upload = multer({
    storage: storage
})

// Establish a database connection
con.connect(function(err) {
    if(err) {
        console.log("Error in Connection");
    } else {
        console.log("Connected");
    }
})

// Define routes and handlers for various API endpoints
// ...

// Start the Express server and listen on port 8081
app.listen(8081, ()=> {
    console.log("Running");
})

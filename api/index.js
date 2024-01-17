import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';
import listingRouter from './routes/listing.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';

dotenv.config();

// This file sets up a server using the Express framework, 
// connects to a MongoDB database, and defines routes for user and authentication operations.


// Connect to MongoDB
mongoose
    .connect(process.env.MONGO)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log(err);
    });

    // dynamic path
    const __dirname = path.resolve();

const app = express();

app.use(express.json()); // allwos json as input of server

app.use(cookieParser());

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);


// Define routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);


app.use(express.static(path.join(__dirname, '/client/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
})



/*
* Summary:
* This code handles errors in an Express.js application by defining an error handling middleware function.
* The function takes four parameters: err, req, res, and next.
* It sets the status code and message based on the error object received.
* If no status code or message is provided, it defaults to 500 (Internal Server Error).
* Finally, it sends a JSON response with the error details.
* Code:
*/
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
    
});

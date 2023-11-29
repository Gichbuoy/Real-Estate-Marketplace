import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js';
import authRouter from './routes/auth.route.js';

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

const app = express();

app.use(express.json()); // allwos json as input of server


// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
    }
);


// Define routes
app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
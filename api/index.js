import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/user.route.js'
import signUpRouter from './routes/signup.route.js'

dotenv.config();
mongoose.connect(process.env.MONGO).then(() => {
    console.log('Connected to MongoDB!');
}).catch((err) => {
    console.log('Failed to connect to MongoDB!', err);
})


const app = express();

app.listen(3000, () => {
    console.log('Listening on port 3000!');
});

app.use("/user", userRouter);
app.use("/", signUpRouter);
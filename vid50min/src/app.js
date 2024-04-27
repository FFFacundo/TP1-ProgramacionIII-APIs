import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import userRoutes from './routes/book.js'

const app = express();
const port = process.env.PORT || 3002;

//middleware
app.use(express.json());
app.use("/api", userRoutes)

//route
app.get("/",(req,res)=>{
    res.send("Welcome to Facundo's Book API, check /api/books")
});

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Connected to Atlas"))
    .catch((error)=>console.error(error));



app.listen(port,()=>{
    console.log("Listening on port", port);
});
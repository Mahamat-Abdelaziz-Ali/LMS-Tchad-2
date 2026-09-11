import express from "express";
import cors from "cors";
import dotenv from "dotenv";
const mongoose=require("mongoose");
const authRoutes = require('./routes/auth-routes/index.js')

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI=process.env.MONGO_URI;

cors({
    origin : process.env.CLIENT_URL,
    methods : ['GET', "POST", "DELETE", "PUT"],
    allowedHeaders: ['Content-Type', "Authorization"],
});

app.use(express.json());

//Database Connection

mongoose.connect(MONGO_URI).then(()=>{console.log("mongoosedb is connected on port")}).catch(e=>console.log(e));


//Routes Configuration

app.use('/auth',authenRoutes
)

app.use((err, req, res, next)=>{
    console.log(err.stack);
    res.status(500).json({
        success: false,
        message: "Something went wrong",
    });
});

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})
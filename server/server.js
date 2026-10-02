import express from "express";
import cors from "cors";                            //importt= packagejs="module"
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from'./routes/auth-routes/index.js';
import mediaRoutes from "./routes/auth-routes/instructor-routes/media-routes.js";
import instructorCourseRoutes from "./routes/auth-routes/instructor-routes/course-routes.js";
import studentViewCourseRoutes from "./routes/student-routes/course-routes.js";
import studentViewOrderRoutes from "./routes/student-routes/order-routes.js";
import studentViewCoursesRoutes from "./routes/student-routes/student-courses-routes.js";
import studentCourseProgressRoutes from "./routes/student-routes/course-progress-routes.js";


dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI=process.env.MONGO_URI;

app.use(cors({
    origin : process.env.CLIENT_URL,
    methods : ['GET', "POST", "DELETE", "PUT"],
    allowedHeaders: ['Content-Type', "Authorization"],
}));

app.use(express.json());

//Database Connection

mongoose.connect(MONGO_URI).then(()=>{console.log("mongoosedb is connected on port")}).catch(e=>console.log(e));


//Routes Configuration

app.use('/auth',authRoutes);

app.use("/media", mediaRoutes);

app.use("/instructor/course", instructorCourseRoutes);

app.use("/student/course", studentViewCourseRoutes);

app.use('/student/order', studentViewCourseRoutes);

app.use('/student/courses-bought', studentViewCoursesRoutes);

app.use('/student/course-progress', studentCourseProgressRoutes)


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


//
//import express from "express"
//import cors from "cors"
//import dotenv from "dotenv"
//import connectDB from "./config/db.js"

//dotenv.config()

//connectDB()

//const app = express()

//app.use(cors())
//app.use(express.json())

//app.get("/", (req, res) => {
  //res.json({
    //message: "LMS Tchad API is running"
  //})
//})

//const PORT = process.env.PORT || 5000

//app.listen(PORT, () => {
  //console.log(`Server running on http://localhost:${PORT}`)
//})
const express=require("express");
const {registerUser}= reqire("../../controllers/auth-controllers");
const route = express.Router();

Router.post("/register", registerUser);
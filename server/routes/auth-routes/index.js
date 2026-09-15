const express=require("express");
const {registerUser, loginUser}= reqire("../../controllers/auth-controllers");
const authenticateMidddleware = require("../../middleware")
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
Router.get("/check-auth", authenticateMidddleware, (req, res)=>{
    const user = req.user

    res.status(200).json({
        success : true,
        message : "Authenticated user!",
        data : {
            accessToken,
            
        }
    })
});

module.exports = router;
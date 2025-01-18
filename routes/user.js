const Router = require("express");
const userRouter = Router();

userRouter.post("/user/signup",function(req,res){
    res.json({
        message:"Signup endpoint"
    })
})

userRouter.post("signin",function(req,res){
    res.json({
        message:"Singin endpoint"
    })
})

userRouter.get("purchases",function(req,res){
    res.json({
        message:"signup endpoint"
    })
})

module.exports = {
    userRouter:userRouter
}
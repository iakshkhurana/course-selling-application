const {Router} = require("express");
const adminRouter = Router();

adminRouter.post("/user/signup",function(req,res){
    res.json({
        message:"Signup endpoint"
    })
})


adminRouter.post("signin",function(req,res){
    res.json({
        message:"Singin endpoint"
    })
})

userRouter.post("/user/signup",function(req,res){
    res.json({
        message:"Signup endpoint"
    })
})

adminRouter.put("/course",function(req,res){
    res.json({
        message:"Singin endpoint"
    })
})

adminRouter.get("/course/bulk",function(req,res){
    res.json({
        message:"Singin endpoint"
    })
})

module.exports={
    adminRouter:adminRouter
}
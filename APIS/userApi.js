const exp=require('express');
const userApp=exp.Router()
const expressAsyncHandler=require("express-async-handler")
const bcryptjs=require("bcryptjs");
const jwt=require("jsonwebtoken")
require('dotenv').config()
const verifyToken=require('./middlewares/verifyToken');
userApp.use(exp.json())
userApp.use(exp.urlencoded());
userApp.get('/getusers',verifyToken,
 expressAsyncHandler(async(request,response)=>{
    let usercollectionObject=request.app.get("usercollectionObject")
    let users=await usercollectionObject.find().toArray()
    response.send({message:"users list : ",payload:users})
}));
userApp.post('/login',expressAsyncHandler(async(request,response)=>{
    let usercollectionObject=request.app.get("usercollectionObject")
    let userCredObj=request.body
    let userOfDB=await usercollectionObject.findOne({username:userCredObj.username})
    if(userOfDB==null){
        response.send({message:"Invalid username"});
    }
    else{
        let status=await bcryptjs.compare(userCredObj.password,userOfDB.password);
        if(status==false){
            response.send({message:"Invalid password"})
        }
        else{
            let token=jwt.sign(
                {username:userOfDB.username},
                process.env.SECRET_KEY,
                {expiresIn:120}
            );
            response.send({message:"success",payload:token,userObj:userOfDB})
        }
    } 
}));
userApp.post(
    '/create-user',
    expressAsyncHandler(async(request,response)=>{
    let usercollectionObject=request.app.get("usercollectionObject")
    let newUserObj=request.body;
    let userOfDB=await usercollectionObject.findOne({username:newUserObj.username})
    if(userOfDB!==null){
        response.send({message:"username has already taken..."})
    }
    else{
        let hashedPassword=await bcryptjs.hash(newUserObj.password,6);
        newUserObj.password=hashedPassword;
        await usercollectionObject.insertOne(newUserObj)
        response.send({message:"user created successfully"})
    }
}))
userApp.get('/test',verifyToken,(request, response)=>{
    response.send({message:"This reply is from private round"});
})
module.exports=userApp;
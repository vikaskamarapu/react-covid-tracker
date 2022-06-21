const jwt=require("jsonwebtoken")
require("dotenv").config()

const verifyToken=(request , response , next )=>{
    let bearerToken=request.headers.authorization;
    if(bearerToken==undefined){
        response.send({message:"unauthorized request"})
    }
    let token=bearerToken.split(" ")[1]
    if(token==null){
        response.send({message:"unauthorized request"})
    }
    try{
    jwt.verify(token,process.env.SECRET_KEY)
    next()
    }
    catch(err){
        response.send({message:"session expired..Relogin to continue"})
    }
}
module.exports=verifyToken;
const express = require("express")
const userSchema = require("../schemas/user")
const router = express.Router()

router.post("/",async (req,res)=>{
    const result = await userSchema.find({username:req.body.username,password:req.body.password})
    if(result.length > 0){
        res.send({status:"Logged in"})
    }else{
        res.send({status:"Invalid username or password"})
    }
})

module.exports = router
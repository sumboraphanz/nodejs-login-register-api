const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const conn = require("./db/conn")

require("dotenv").config()

const loginRouter = require("./routes/login")
const registerRouter = require("./routes/register")
const userSchema = require("./schemas/user")

const app = express()
app.use(cors())
app.use(express.json())
conn()

app.get("/",async (req,res)=>{
    res.send(await userSchema.find({}))
    
})
app.use("/login",loginRouter)
app.use("/register",registerRouter)


app.listen(process.env.PORT,()=>{
    console.log(`Server running on port ${process.env.PORT}`)
})


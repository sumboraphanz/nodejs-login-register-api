const express = require("express")
const userSchema = require("../schemas/user")
const router = express.Router()


router.post("/", async (req, res) => {
    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    const result = await userSchema.find({ username: data.username,})
    console.log(result.length)
    if (result.length == 0) {
        userSchema(data).save()
        res.send({ status: "Register successfully" })
    } else
        res.send({ status: "Username is already taken"})
})

module.exports = router
const express = require("express");

const router = express.Router();

const User = require("../models/UserSchema.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


router.post('/register',  async (req, res) => {
    const {firstName, lastName, email, password} = req.body;
    if(!firstName || !lastName || !email || !password) {
        return res.status(400).json({error: "All fields are required"});
    }
    const isuser =  await User.findOne({email});
    if(isuser) {
        return res.status(400).json({error: "User already exists"});
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({firstname: firstName, lastname: lastName, email, password: hashedPassword});
    await user.save();
    let token = jwt.sign({id:user._id,email:email},process.env.JWT_SECRET, {expiresIn:"1h"});
    return res.status(201).json({message: "User created successfully", token, user});
});

router.post("/login", async (req,res) =>{
    const {email, password} = req.body;
    const hashedPassword = bcrypt.hash(password, 10);
    if(!email || !password) {
        return res.status(400).json({error: "All fields are required"});
    }
    const isuser = await User.findOne ({email:email});
    if(!isuser) {
        return res.status(400).json({error: "Invalid email"});
    }
    const isMatch = await bcrypt.compare(password, isuser.password);
    if(!isMatch) {
        return res.status(400).json({error: "Invalid password"});
    }
    let token = jwt.sign({id:isuser._id,email:email},process.env.JWT_SECRET, {expiresIn:"1h"});
    return res.status(200).json({message: "Login successful", token, user:isuser});
})


router.get("/:id", async (req, res) => {
    const user = await User.findById(req.params.id);
    if(!user) {
        return res.status(404).json({error: "User not found"});
    }
    return res.status(200).json({user});
});

module.exports = router ;
require('dotenv').config()
let User=require('../models/userModels')
let jwt=require('jsonwebtoken')
let bcrypt=require('bcrypt')

exports.signup=async(req,res)=>{
    try {
        let {name,email,password}=req.body;
        if(!name || !email || !password){
            return res.status(400).json({error:'All fields are required '})
        }
        let exist=await User.findOne({email})
        if(exist){
            return res.status(400).json({error:'Email already exist'})
        }
        let salt=await bcrypt.genSalt(10)
        let hashedPassword=await bcrypt.hash(password,salt)
        await User.create({
            name,
            email,
            password:hashedPassword
        })
        res.status(201).json({message:'Signup successful'})
    } catch (error) {
         return res.status(500).json({error:error.message})
    }
}
exports.login=async(req,res)=>{
    try {
        let {email,password}=req.body
        if(!email || !password){
             return res.status(400).json({error:'All fields are required '})
        }
        let user=await User.findOne({email})
        if(!user){
             return res.status(400).json({error:'invalid credentials'})
        }
        let compare=await bcrypt.compare(password,user.password)
        if(!compare){
             return res.status(400).json({error:'Invalid credentials'})
        }
        let token=jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
        res.status(200).json({message:'Token Provided',token})
    } catch (error) {
         return res.status(400).json({error:'All fields are required '})
    }
}
let express=require('express')
const { signup, login } = require('../controllers/userControllers')
const middelauth = require('../middleware/authmiddle')

let routes=express.Router()

routes.post('/signup',signup)
routes.post('/login',login)
routes.get('/profile',middelauth,(req,res)=>{
    res.json({message:'Profile accessed',user:req.user})
})

module.exports=routes
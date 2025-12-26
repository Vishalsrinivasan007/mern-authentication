let jwt=require('jsonwebtoken')

function middelauth(req,res,next){
    try {
        let token=req.headers.authorization;
        if(!token){
             return res.status(400).json({error:'Token Not Provided'})
        }
        let decoded=jwt.verify(token,process.env.JWT_SECRET)
        req.user=decoded
        next()
    } catch (error) {
         return res.status(401).json({error:'unauthorized access'})
    }
}
module.exports=middelauth
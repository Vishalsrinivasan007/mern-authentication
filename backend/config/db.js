let mongoose=require('mongoose')

let connectDB=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected Successfully');
        
    } catch (error) {
        console.log('Not connected');
        
    }
}
module.exports=connectDB;
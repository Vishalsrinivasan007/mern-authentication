let express=require('express')
let dotenv=require('dotenv')
let cors=require('cors')
let routers=require('./routes/userRoutes')
const connectDB = require('./config/db')

dotenv.config()
let app=express()
app.use(cors())
app.use(express.json())
connectDB()
app.use('/api/auth',routers)

app.listen(process.env.PORT,()=>{
    console.log('server is running successfully');
    
})

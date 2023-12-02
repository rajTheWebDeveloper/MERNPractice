import express from 'express'
import env from 'dotenv'
import Connect from './ConnectDB/connect.js'
import UserRoutes from './routes/User.js'
import CategoryRoutes from './routes/Category.js'
env.config()
let app=express()
app.use(express.json())

app.use('/user',UserRoutes)
app.use('/category',CategoryRoutes)

let start=async ()=>
{
    await Connect()
    app.listen(process.env.PORT,()=>
    {
        console.log("Connected to port 2000")
    })
}
start()
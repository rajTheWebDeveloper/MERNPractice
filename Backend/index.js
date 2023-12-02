import express from 'express'
import env from 'dotenv'
import Connect from './ConnectDB/connect'
env.config()
let app=express()
app.use(express.json())

let start=async ()=>
{
    await Connect()
    app.listen(process.env.PORT,()=>
    {
        console.log("Connected to port 2000")
    })
}

start()
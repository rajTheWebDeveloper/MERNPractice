import mongoose from "mongoose";
import env from 'dotenv'
env.config()

let Connect=async ()=>
{
    return mongoose.connect(`mongodb+srv://neeluneelima132:${process.env.DB_CONNECT_PASS_STRING}@cluster0.x1bgtei.mongodb.net/MERNPractice?retryWrites=true&w=majority`)
    .then(()=>
    {
        console.log("Connected to mongo ATLAS")
    })
    .catch(()=>
    {
        console.log("Please check the connection again")
    })
}


export default Connect
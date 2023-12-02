import mongoose from "mongoose";

let categorySchema=new mongoose.Schema({

    name:{
        type:String,
        trim:true
    },
    slug:{
        type:String,
        trim:true
    },
    parentId:{
        type:String,
        trim:true
    }
})


export default mongoose.model('Category',categorySchema)
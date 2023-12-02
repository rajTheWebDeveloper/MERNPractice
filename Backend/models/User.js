import mongoose from "mongoose";
import bcrypt from 'bcryptjs'


let userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        trim:true
    },
    lastName:{
        type:String,
        trim:true
    },
    email:{
        type:String,
        trim:true,
        unique:true,
        lowercase:true,
    },
    hash_password:{
        type:String,
        trim:true
    }
})


userSchema.virtual('password')
.set(function(password)
{
    this.hash_password=bcrypt.hashSync(password)
})


let validatePassword=function(password,hash_password)
{
    return bcrypt.compareSync(password,hash_password)
}

export default mongoose.model('User',userSchema)
export {validatePassword}
import express from 'express'
import User, { validatePassword } from '../../models/User.js'


let SignInUser=async (req,res)=>
{
    let {email,password}=req.body;
    let found=await User.findOne({email});
    if(found)
    {
        let {hash_password,firstName}=found;
        let isValidPassword=validatePassword(password,hash_password)
        if(isValidPassword)
        {
            return res.send(`Welcome ${firstName}`)
        }
        else 
        {
            return res.send("Incorrect password. Try resetting password")
        }
    }
    else
    {
        return res.send("Account doesnt exists. Create an account")
    }

}


export default SignInUser
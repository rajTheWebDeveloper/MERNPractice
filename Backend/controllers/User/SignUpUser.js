import express from 'express'
import User from '../../models/User.js'

let SignUpUser=async (req,res)=>
{
    let {firstName,lastName,email,password}=req.body
    let found=await User.findOne({email})
    if(found)
    {
        return res.send("Account already exists. Please try signing in")
    }
    else
    {
        let UserCreated=await User.create(req.body)
        return res.send(UserCreated)
    }
}


export default SignUpUser
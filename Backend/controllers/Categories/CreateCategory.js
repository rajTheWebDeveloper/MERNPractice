import express from 'express'
import Category from '../../models/Category.js'
import slugify from 'slugify';


let CreateCategory=async (req,res)=>
{
    let {name,parentId}=req.body
    let found=await Category.findOne({name});
    if(found)
    {
        return res.send("Category already exists")
    }
    else 
    {
        let CreatedCategory=await Category.create({
            name,
            slug:slugify(name),
            parentId:parentId?parentId:null
        })
        return res.send(CreatedCategory)
    }
}


export default CreateCategory
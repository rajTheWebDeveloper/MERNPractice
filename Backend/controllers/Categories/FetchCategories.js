import express from 'express'
import Category from '../../models/Category.js'


let createNestedCategories=(categories,parentId=null)=>
{
    let nested=[];
    let category;
    if(parentId)
    {
        category=categories.filter((items)=>items.parentId===parentId)
        console.log(category)
    }
    else 
    {
        category=categories.filter((items)=>!items.parentId)
        console.log(category)
    }
    for(let items of category)
    {
        let {id,name,slug,parentId}=items
        let updated={
            id,name,slug,parentId,children:createNestedCategories(categories,id)
        }
        nested.push(updated)
    }
    return nested
}

/* 

if(parent)==null
cn(cats,parent) = 

men
women

if(parent)!=null
electronics

*/



let FetchCategories=async (req,res)=>
{
    let foundCategories=await Category.find({});
    let nestedCategories=createNestedCategories(foundCategories)
    return res.send(nestedCategories)
}

export default FetchCategories
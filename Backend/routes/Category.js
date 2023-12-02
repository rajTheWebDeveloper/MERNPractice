import express from 'express'
import CreateCategory from '../controllers/Categories/CreateCategory.js';

let router=express.Router();


router.post('/create',CreateCategory)


export default router
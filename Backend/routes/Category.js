import express from 'express'
import CreateCategory from '../controllers/Categories/CreateCategory.js';
import FetchCategories from '../controllers/Categories/FetchCategories.js';

let router=express.Router();


router.post('/create',CreateCategory)
router.get('/fetch',FetchCategories)


export default router
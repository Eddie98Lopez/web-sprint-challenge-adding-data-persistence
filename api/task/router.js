// build your `/api/tasks` router here
const express = require('express')
const router = express.Router()
const {validateTask} = require('./middleware')
const {get, insert} = require('./model')

router.get('/', async (req,res,next)=>{
    try{
        const task = await get()
        res.status(200).json(task)
    }
    catch(err){
        next(err)
    }
})
router.post('/', validateTask,async (req,res,next)=>{
    try{
        const task = await insert(req.body)
        res.status(200).json(task)
    }
    catch(err){
        next(err)
    }
})

router.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})

module.exports = router
// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const {validateResource} = require('./middleware')
const {get, insert} = require('./model')

router.get('/', async (req,res,next)=>{
    try{
        const resources = await get()
        res.status(200).json(resources)
    }
    catch(err){
        next(err)
    }
})
router.post('/', validateResource,async (req,res,next)=>{
    
    try{
        const newRes = await insert(req.body)
        res.status(200).json(newRes)
    }
    catch(err){
        next(err)
    }
})

router.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})

module.exports = router
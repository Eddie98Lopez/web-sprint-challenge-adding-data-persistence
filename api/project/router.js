// build your `/api/projects` router here
const express = require('express')
const router = express.Router()
const {get, insert} = require('./model')
const {validateProject}= require('./middleware')

router.get('/', async (req,res,next)=>{
    try{
        const projects = await get()
        res.status(200).json(projects)
    }
    catch(err){
        next(err)
    }

})

router.post('/', validateProject,async (req,res,next)=>{
    const incoming = req.body
    const proj = await insert(incoming)
    try{
        res.status(200).json(proj)
    }
    catch(err){
        next(err)
    }
})

router.use((err,req,res,next)=>{
    res.status(500).json({message:err.message})
})

module.exports = router



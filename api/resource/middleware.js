const db = require('../../data/dbConfig')

const validateResource = async (req,res,next) => {
    const {resource_name} = req.body
    if(resource_name){
        const exists = await db('resources').where('resource_name', resource_name)
        if(!exists){
            next()
        }
        else{
            res.status(400).json('Resource name already exists')
        }

    }
    else{
        res.status(400).json('resource name is required')
    }
}

module.exports = {validateResource}
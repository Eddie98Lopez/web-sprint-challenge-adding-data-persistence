const validateProject = (req,res,next)=> {
    const {project_name}=req.body
    if (!project_name){
        res.status(400).json('name is required')
    }
    else{
        next()
    }

}

module.exports = {validateProject}
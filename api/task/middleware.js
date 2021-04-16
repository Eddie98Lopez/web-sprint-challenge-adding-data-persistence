const validateTask = (req,res,next)=>{
    const {task_description,project_id} = req.body
    if(!task_description || !project_id){
        res.status(400).json("task description and project id are required")
    }
    else{
        next()
    }
}

module.exports = {validateTask}
// build your `Task` model here
const db = require('../../data/dbConfig')

const get = (id) =>{
    // if id exists return project info of project with specified id...else return all projects from the database

    if(id){
        return db('tasks').where('tasks_id', id).first()
    }
    else{
        return db('tasks')
    }

}

const insert = async (task) =>{
    const [id] = await db('tasks').insert(task)
    const newTask = await get(id)
    return newTask
}


module.exports = { get, insert}

// build your `Resource` model here
const db = require('../../data/dbConfig')

const get = (id) =>{
    // if id exists return project info of project with specified id...else return all projects from the database

    if(id){
        return db('resources').where('resources_id', id).first()
    }
    else{
        return db('resources')
    }

}

const insert = async (project) =>{
    const [id] = await db('resources').insert(project)
    const newResource = await get(id)
    return newResource
}


module.exports = {get, insert}

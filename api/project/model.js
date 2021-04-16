// build your `Project` model here
const db = require('../../data/dbConfig')

const get = (id) =>{
    // if id exists return project info of project with specified id...else return all projects from the database

    if(id){
        return db('projects').where('projects_id', id).first()
    }
    else{
        return db('projects')
    }

}

const insert = async (project) =>{
    const [id] = await db('projects').insert(project)
    const newProj = await get(id)
    return newProj
}


module.exports = { get, insert}
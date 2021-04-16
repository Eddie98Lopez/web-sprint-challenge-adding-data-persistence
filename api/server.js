// build your server here and require it from index.js
const express = require('express')
//const helmet = require('helmet')
const server = express()

const projectRouter = require('../api/project/router')
const resourceRouter = require('../api/resource/router')
const taskRouter = require('../api/task/router')

//server.use(helmet())
server.use(express.json())
server.use('/api/resources',resourceRouter)
server.use('/api/projects', projectRouter)
server.use('/api/tasks', taskRouter)

module.exports = server



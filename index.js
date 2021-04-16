// start your server here
const { eventNames } = require('./api/server')
const server = require('./api/server')

const port = 5000 || eventNames.process.port

server.listen(port, ()=>{
    console.log(`server running on http://localhost:${port}`)
})

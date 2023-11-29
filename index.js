// Import express
const default_port = 3000
const express = require("express")
const app = express()

// Configure public folder to be default static object folder.
app.use(express.static('./public'))

// Setup server to listen on this port
app.listen(default_port, () =>
    console.log(`Server listening on port http://localhost:${default_port}/`)
)
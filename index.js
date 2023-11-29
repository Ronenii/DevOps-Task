// Import express
const express = require("express")
const app = express()

// Log the request to console every time someone sends a request to the server
app.use((req, res, next) =>{
    console.log(`new request from ${req.ip}: method:${req.method}, endpoint:'${req.url}' . `)
    next();
});

// Configure public folder to be default static object folder.
app.use(express.static('./public'))

// Setup server to listen on this port
const default_port = 3000
app.listen(default_port, () =>
    console.log(`Server listening on port http://localhost:${default_port}/`)
)
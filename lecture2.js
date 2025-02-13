//https all sites runs on port 80/18

const http = require("http");
const server = http.createServer((request , response) =>{
    console.log("Server is started...");
    // resonse.end("<h1> Server is created successfully...</h1>");
    if(request.url === '/home'){
        response.end("<h1>Welcome to home page</h1>");
    }
    else if(request.url === '/about'){
        response.end("<h1>Welcome to About page</h1>") ; 
    }
    else if(request.url === '/services'){
        response.end("<h1>Welcome to Services page</h1>") ; 
    }
    else{
        response.end("File not found...")
    }

})


server.listen(4000, ()=>{
    console.log("Server is started on Port: 4000");

})
const http = require("http") ; 
const server = http.createServer((request , response) =>{
    console.log("Server is created") ;
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

const PORT = 4000 ; 
server.listen(PORT , ()=>{
    console.log(`Server is running in on port ${PORT}`) ; 
})
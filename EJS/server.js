const express = require("express"); 
const app = express(); 
// app.get("/", (req, res) =>{
//     res.send("Server is created..."); 
// }); 

app.set("view engine" , "ejs"); 

app.get("/" , (req , res) =>{
    // res.sendFile("template/index.html" , {
    //     root: __dirname });
    let brandname = "Google.com" ;  
    res.render("index" , {brandname:brandname}); 
})

app.get("/footer" , (req , res)=>{
    res.render("footer"); 
})

app.listen(3018 , ()=>{
    console.log(`Server is running...`);
})

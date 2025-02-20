const express =require("express")
const app=express()


app.use(express.urlencoded({extended:true}))
let userData=[]
// converts urlencoded data into objects
//it is a middleware that has to be run on every requests
app.get("/addUser",(req,res)=>{
    res.sendFile(__dirname+"/index.html")
})


app.post("/addUser",(req,res)=>{
    let {name,email,password}= req.body;
    userData.push({name:name,email:email,password:password})
    console.log(name,email,password)
    res.send(userData)
})

app.listen(9782,()=>{
    console.log("server started")
})

// body------content type-->json, urlencoded, multi path form data-------converted into objects

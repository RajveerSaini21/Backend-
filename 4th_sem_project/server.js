const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const port = 1812

const app = express()
app.use(express.static(__dirname))
app.use(express.urlencoded({extended:true}))

mongoose.connect('mongodb://127.0.0.1:27017/students')
const db = mongoose.connection
db.once('open',()=>{
    console.log("Mongodb connection successful")
})

const userSchema = new mongoose.Schema({
    fname:String,
    lname:String,
    dob:String,
    gender:String,
    phone:String,
    email:String,
    address:String,
    percentage:String,
    jee:String,
    category:String,
    course:String
})

const Users = mongoose.model("data",userSchema)

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'form.html'));
})

app.post('/post',async (req,res)=>{
    const {fname,lname,dob,gender,phone,email,address,percentage,jee,category,course} = req.body
    const user = new Users({
        fname,
        lname,
        dob,
        gender,
        phone,
        email,
        address,
        percentage,
        jee,
        category,
        course
    })
    await user.save()
    console.log(user)
    res.send("Form Submission Successful Congratulations!")
})

app.listen(port,()=>{
    console.log("Server Started.")
})
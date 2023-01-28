const express = require("express");
const cors =require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();

const {Schema} = mongoose;

const userSchema = new Schema({
    headImage:{type:String,required:true},
    courses:{type:String,required:true},
    items:{type:String,required:true},
    HumanImage:{type:String,required:true},
    username:{type:String,required:true},
    job:{type:String,required:true},
    price:{type:Number,required:true},
})

const Users = mongoose.model("user",userSchema)

const app = express()

app.use(cors());
app.use(bodyParser.json());


const PORT = process.env.PORT;
const url = process.env.CONNECT_URL.replace(
    "<password>",
    process.env.PASSWORD
)


//getAll data

app.get("/users",(req,res)=>{
    Users.find({},(err,docs)=>{
        if (!err) {
            res.send(docs)
        }
    })
})

//getALLdatabyID

app.get("/users/:id",(req,res)=>{
    let {id}=req.params
    Users.findById(id,(err,doc)=>{
        if (!err) {
            if (doc) {
                res.send(doc)
            }
        }
    })
})

//delete

app.delete("/users/:id",(req,res)=>{
    let {id}=req.params
    Users.findByIdAndDelete(id,(err,doc)=>{
        if (!err) {
            res.status(202).json({message:"SECCESSFUL DELETE"})
        }else{
            res.status(404).json({message:err})
        }
    })
})


//post

app.post("/users",(req,res)=>{
    let newUser = new Users({
        headImage:req.body.headImage,
        courses:req.body.courses,
        items:req.body.items,
        HumanImage:req.body.HumanImage,
        username:req.body.username,
        job:req.body.job,
        price:req.body.price,
    })
    newUser.save()

    res.status(202).json({message:"SECCESSFUL"})
})


mongoose.set('strictQuery', false);
mongoose.connect(url,(err)=>{
    if (!err) {
        console.log("DB CONNECT");

        app.listen(PORT,()=>{
            console.log("Server Start");
        })
    }
})
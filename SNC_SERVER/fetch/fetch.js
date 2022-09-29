// this file acting as module (fecth)
//login module accepts the from angular
//login module fetch from "mongodb" database

var express = require('express');
var bodyparser = require('body-parser');

let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let fetch = express.Router().get("/",(req,res) =>{
    talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
        if(err){
            throw err;
        }
        else{
            db.collection("user").find({}).toArray((err,array)=>{
                if(err){
                    throw err;
                }
                else{
                    if(array.length > 0){
                        res.send(array);
                    }else{
                        res.send({message : "Record Not found..."})
                    } 
                }
            });
        }
    });
});
module.exports = fetch;

let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let createClubs  = require("express").Router().post("/",(req,res)=>{
        console.log("Inside createClubs.js "+req.params.topic+" "+req.params.GroupName+" "+req.params.link)
        talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>
        {
            if(err)
                throw err;
            else{
                db.collection("clubs").insertOne({"topic": req.body.topic, "Username": req.body.Username,"GroupName": req.body.GroupName, "link":req.body.link},
                (err, result)=> {
                    if (err) {
                        throw err;
                    }
                    else{
                        res.send({message:"1 document inserted"});
                    }
                    db.close();
                })
            }
        });
});
module.exports = createClubs;
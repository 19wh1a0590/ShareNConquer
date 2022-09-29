let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;  
	
let Discover  = require("express").Router().get("/:topic",(req,res)=>{
    // console.log("Inside login.js "+req.body.topic);

        talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                db.collection("clubs").find({"topic":req.params.topic}).toArray((err, result) => {
                    if (err) {
                        throw err;
                    }
                    else{
                            res.send(result);                    
                    }
                });
            }
        });
});
module.exports = Discover;
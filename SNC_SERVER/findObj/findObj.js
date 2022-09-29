let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;  
	
let findObj  = require("express").Router().get("/:email",(req,res)=>{
    console.log("Inside findObj.js "+req.params.email);

        talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                db.collection("user").findOne({"email":req.params.email}, 
                (err, Array) => {
                    if (err) {
                        throw err;
                    }
                    else{
                            res.send(Array);                    
                        }
                });
            }
        });
});
module.exports = findObj;
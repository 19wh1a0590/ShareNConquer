let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;  
	
let Settings  = require("express").Router().get("/:username",(req,res)=>{
    console.log("Inside login.js "+req.params.username);

        talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                db.collection("user").findOne({"username":req.params.username}, 
                (err, result) => {
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
module.exports = Settings;
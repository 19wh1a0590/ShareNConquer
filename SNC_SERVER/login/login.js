let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;  
    
let login  = require("express").Router().get("/:email/:password",(req,res)=>{
    console.log("Inside login.js "+req.params.email);

        talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                db.collection("user").findOne({"email":req.params.email,"password":req.params.password}, 
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
module.exports = login;
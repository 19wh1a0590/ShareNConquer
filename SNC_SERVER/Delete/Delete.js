let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;  

let Delete = require('express').Router().delete("/:username",(req,res)=>{
    console.log("Inside Delete.js "+req.params.username);

    talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
        if(err){
            throw err;
        }
        else{
            db.collection("user").remove({"username":req.params.username}, 
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
module.exports = Delete;
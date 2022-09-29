let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;  
	
let seeClubs  = require("express").Router().get("/:Username",(req,res)=>{
    console.log("Inside seeClubs.js "+req.params.Username);

        talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
            if(err){
                throw err;
            }
            else{
                db.collection("clubs").find({"Username":req.params.Username}).toArray((err, array) => {
                    if (err) {
                        throw err;
                    }
                    else{
                        if(array.length > 0){
                            res.send(array);
                        }else{
                            res.send(null);
                            //res.send({message : "Record Not found..."})
                        }               
                    }
                });
            }
        });
});
module.exports = seeClubs;
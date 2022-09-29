let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let register  = require("express").Router().post("/",(req,res)=>{
        console.log("Inside register.js "+req.params.username+" "+req.params.email+" "+req.params.password)
        talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>
        {
            if(err)
                throw err;
            else{
                db.collection("user").insertOne({"username": req.body.username, "email": req.body.email, "password":req.body.password},
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
module.exports = register;
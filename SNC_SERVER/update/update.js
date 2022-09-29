let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let update  = require("express").Router().put("/",(req,res)=>{
		console.log("Inside update.js: 2 "+req.body.username); 
		talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
			if(err){
				throw err;
            }
			else{ 
				console.log("Inside update.js: "+req.body.email);               
				var newvalues = { $set: {username:req.body.username,  password:req.body.password} };
				db.collection("user").updateOne({email: req.body.email},newvalues, (err, result)=> {
						if (err) {
						    throw err;
                        }
						else{
						    res.send({message:"1 document updated"});
                        }
				});
			}
		});
});
	
module.exports = update;
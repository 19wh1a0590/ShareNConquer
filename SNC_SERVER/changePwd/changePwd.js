let mongodb = require("mongodb");
let talentsprint = mongodb.MongoClient;

let changePwd  = require("express").Router().put("/",(req,res)=>{
		console.log("Inside changePwd.js: "+req.body.email + req.body.password); 
		talentsprint.connect("mongodb://localhost:27017/forum",(err,db)=>{
			if(err){
				throw err;
            }
			else{ 
				console.log("Inside update.js: "+req.body.email);               
				var newvalues = { $set: {password:req.body.password} };
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
	
module.exports = changePwd;
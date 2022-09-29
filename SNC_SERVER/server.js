//import express module
let express = require("express");
//import body-parser module
let bodyparser = require("body-parser");

let cors =  require("cors");
//create the rest object
let app = express();
//enable the ports comm

//set the JSON as MIME type
app.use(bodyparser.json());
//read the json
app.use(bodyparser.urlencoded({extended:false}));

app.use(cors());
//use login module
app.use("/login", require("./login/login"));
//use register module
app.use("/register", require("./register/register"));
//use update module
app.use("/update", require("./update/update"));
//use fetch module
app.use("/fetch", require("./fetch/fetch"));
//use delete module
app.use("/Delete", require("./Delete/Delete"));
app.use("/createClubs", require("./createClubs/createClubs"));
//use createclub module
app.use("/Discover", require("./Discover/Discover"));
app.use("/seeClubs", require("./seeClubs/seeClubs"));
app.use("/changePwd", require("./changePwd/changePwd"));
app.use("/findObj", require("./findObj/findObj"));
//assign the port no.
app.listen(3000);
console.log("server listening the port no.3000");
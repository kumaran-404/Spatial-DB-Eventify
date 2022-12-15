const exp =require("express")
const app = exp()
const cors = require("cors")

require("./db/DBConnect.js")

app.use(cors())

app.use(exp.json())

app.use("/api/events/",require("./routes/events"));

app.use("*",(req,res)=>{
    res.json({"message":"not FOund"}).status(404)
})

app.listen(8080,(err)=>{

	if(err) console.log("Error starting server");
	else console.log("Server started at 8080");

});


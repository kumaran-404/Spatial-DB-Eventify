const mongoose = require("mongoose")

const location ={
    
    type : "String",
    default: "Point",
    coordinates :[Number],
	
    
}

const userSchema = new mongoose.Schema({

	username :{ 
		type:String ,
		unique: true ,
		null: false 
	},

	isAdmin : {
		type :Boolean ,
		default: false 
	},

	favourites :{
		type :[]
	},

	permanentLocation  :{
		location
	},

	password :{
		type:String ,
	}


})


module.exports = mongoose.model.Users ||  mongoose.model("Users",userSchema)

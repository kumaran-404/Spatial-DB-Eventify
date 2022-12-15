const mongoose= require("mongoose")

const location ={
    type:{
        type: String 
    },

    coordinates :[Number]
    
}

const EventSchema =new mongoose.Schema({

    name : String ,

    description : String ,

    location,

    posted :{
        at : {default :Date.now ,type:Date } ,
        by : {type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    } ,

    updated :{
        at : {type:Date},
        by : {type:mongoose.Schema.Types.ObjectId,ref:"Users"},
    },
    event_date : {
        type:Date ,
        required : true 
    }

});

EventSchema.index({"location":"2dsphere"})

EventSchema.pre("save",(next)=>{

    const time = new Date();

    this.updated.at = time ;

    next(); 

})

module.exports = mongoose.models.Events || mongoose.model("Events",EventSchema); 
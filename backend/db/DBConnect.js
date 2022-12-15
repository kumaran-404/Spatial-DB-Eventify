
const mongoose = require("mongoose")

let cachedObj = global.mongoose

if(!cachedObj){

    cachedObj = global.mongoose =  null

}

async function dbConnect(){

    if(cachedObj) {
        return cachedObj ;
    }

    cachedObj = mongoose.connect("mongodb://127.0.0.1:27017/DBProject")

    let connection =  mongoose.connection

    connection.on("error",(err)=>{
        console.log("ERROR: Database Connection",err)
    })

    connection.on("open",()=>{
        console.log("SUCCESS: Database Connection ")
    })

    return cachedObj

}


module.exports = dbConnect()

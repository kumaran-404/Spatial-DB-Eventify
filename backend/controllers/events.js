const Event = require("../db/EventModel")


const AddEvent=async (req,res)=>{
    
    let data = req.body

    if(!data.name || !data.description || !data.event_date || !data.location) return res.status(400).json({message:"error"})


    try{
        

        data.event_date = new Date(data.event_date)

        const r = await Event.insertMany(data)
        
        console.log(r[0].location.coordinates)

    }
    catch(err){
        console.log(err)

        return res.json({message:"failure"})
    }

    return res.json({message:"success"})

}


const getDetails=async (req,res)=>{
    
    console.log(req.data)

    return res.json(data).status(404)

}

const UpdateEvent=async (req,res)=>{

}



const SearchEvent = async (req,res)=>{

    console.log("hi",req.body) 

    const data =  req.body

    const t =await Event.find({})

    console.log(t[0].location.coordinates)
    

    const ans = await Event.aggregate([
        {
            "$geoNear":{
                near : {
                    type : "Point",
                    coordinates : data.location 
                },
                distanceField :"dist",
                maxDistance : parseInt(data.range )*1000

            },
            
        },
        {
            '$project' :{
                name : 1 , _id :1 , "location.coordinates":1 , dist :1 
            }
        }
    ])

    console.log(ans) 

    res.json(ans)

}

module.exports = {
    AddEvent , getDetails,UpdateEvent ,SearchEvent 
}



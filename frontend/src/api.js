const URL = "http://localhost:8080/api/events/"


const add = async(data)=>{
    
    const endpoint = URL + "add";
    console.log(data)

    const res = await fetch(endpoint,{
        method :"POST",
        headers :{
            'Content-Type':"application/json",
            'Accept' :"application/json"
        },
        mode : "cors",
        body : JSON.stringify(data)
    }) ;

    
    console.log(res)


}

const getDetails = async(id)=>{
    
    const endpoint = URL + "/"+ id;

    const res = await fetch(endpoint,{
        method :"get",
    }) ;

    console.log(res)

}

const searchEvent = async(data)=>{
    
    console.log(data)

    const endpoint = URL + "search/";

    const res = await fetch(endpoint,{
        method :"POST",
        headers :{
            'Content-Type':"application/json",
            'Accept' :"application/json"
        },
        mode : "cors",
        body : JSON.stringify(data)
    }) ;

    const data__ = await res.json() ;

    return data__


}

const update = async(data)=>{

    const endpoint = URL + "/update/"+data.id;

    const res = await fetch(endpoint,{
        method :"patch",
        body : JSON.stringify(data)
    }) ;

    console.log(res)
}

module.exports = {
    update ,searchEvent,getDetails,add
}
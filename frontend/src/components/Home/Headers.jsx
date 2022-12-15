import React,{useRef,useState} from 'react'
import {Form,Button} from 'react-bootstrap';
import {searchEvent} from "../../api"
import MapUi from "./MapUi"

const Headers = ({currLocation,changeTriggerMarker,triggerMarker,isLocationSet,changeIsLocation,addEnable,changeAddEnable }) => {

  const [range,changeRange] = useState(5)
  const [search,changeSearch] =useState("")

  const submit = async()=>{

      const r =await searchEvent({range,search,location:currLocation})
      changeTriggerMarker(r)

      
  }


  return (
    <div class="header">
        
        <span class="logo">Eventify</span>

        <Form.Control onChange={(e)=>{changeSearch(e.target.value)}}  type="text" placeholder="Type any places" />
       
        <div style={{margin:"1.5vh 0",width:"100%"}}>

            <i style={{color:"white"}}>{range} km</i>

            <Form.Range  onChange={(e)=>{changeRange(e.target.value)}} min="0" step="0.2" value={range}  max="20"/>
        </div>
        
        <Button className="search-button" onClick={submit} variant="primary">Search Events</Button>

        <Button onClick={(e)=>{
            
            changeAddEnable(true) 
          
        }} style={{margin:"20px 0",opacity:addEnable?0.5:1}} disabled={addEnable} >Add Event</Button>
  
        <span style={{color:"white"}}>{!isLocationSet&&addEnable ?"Set Your Location to add":""}</span>

    </div>
  )
}

export default Headers

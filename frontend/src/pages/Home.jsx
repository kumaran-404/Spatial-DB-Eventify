import React,{useState,useEffect } from 'react'
import MapUi from '../components/Home/MapUi'
import Headers from '../components/Home/Headers'

function Home() {

  const [isLocationSet,changeIsLocation] = useState(false)
  const [addEnable,changeAddEnable] = useState(false)
  const [triggerMarker,changeTriggerMarker] = useState([])
  const [currLocation,changeCurrLocation] = useState([77.32920319901064, 11.105080894886868])
  

  useEffect(()=>{
      if(isLocationSet) {
         console.log("location set")
      }
  },[isLocationSet])

  return (
    <div class="home">

        <Headers isLocationSet={isLocationSet}
                changeIsLocation ={changeIsLocation}
                addEnable={addEnable}
                changeAddEnable = {changeAddEnable}
                triggerMarker={triggerMarker}
                changeTriggerMarker={changeTriggerMarker}
                currLocation = {currLocation}
        />

        <MapUi
            isLocationSet={isLocationSet}
            changeIsLocation ={changeIsLocation}
            addEnable={addEnable}
            changeAddEnable = {changeAddEnable}
            triggerMarker={triggerMarker}
            changeTriggerMarker={changeTriggerMarker}
            currLocation = {currLocation} 
            changeCurrLocation = {changeCurrLocation}
        />

    </div>
  )
}

export default Home
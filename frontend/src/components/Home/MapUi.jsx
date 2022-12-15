import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import Modal_ from "./Modal"
import * as ReactDomServer from "react-dom/server"

const api = "pk.eyJ1IjoiYXN0cm9ib3k3MyIsImEiOiJjbGJoaDNkd2owb3EyM29tdXFsenVsanlyIn0.msszTEOTEXyF3Q63kqm6xA"

mapboxgl.accessToken = api;

let firstTime = true ;

export default function MapUi({changeTriggerMarker,triggerMarker,isLocationSet,changeIsLocation,addEnable,
  changeAddEnable ,changeCurrLocation,currLocation}) {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [zoom, setZoom] = useState(4);
  const [addLocation,changeAddLocation] = useState([0,0])
  const [marker,changeMarker] = useState([])

  const func = useRef(null)

  

  const [openModal,changeOpenModal] = useState(false)
  

  useEffect(()=>{
    
    if(!map.current) return 


    if(addEnable){

        map.current.on("click",func.current)

    } else map.current.off("click",func.current)

    
  },[addEnable])
  
  

  useEffect(() => {
    if (map.current) return; 

    func.current = (e)=>{
      
      changeAddLocation([e.lngLat.lng,e.lngLat.lat])
      changeOpenModal(true)

    } ;


    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [currLocation[0], currLocation[1]],
      zoom: zoom
    });

    const controller =  new mapboxgl.GeolocateControl({
      positionOptions: {
      enableHighAccuracy: false
      },
      trackUserLocation: false,
      showUserHeading: true
      });

    map.current.addControl(controller);

    controller.on('geolocate', function (ev) {

      changeCurrLocation([ev.coords.longitude,ev.coords.latitude,])
   

    });
    
  },[])


  useEffect(()=>{

    removeMarker();
    addMarker();

  },[triggerMarker])

  const addMarker =()=>{

      const Custom = ({name,_id,distance})=>{
          return(
            <div style={{display:"flex",flexDirection:"column"}}>
               <span >{name}</span>
               <span>{distance} km </span>
               <span>posted on : {}</span>
               <span>Description : {}</span>
            </div>
          )
      }

      let curr =[] ;
      for(var i=0;i<triggerMarker.length;i++){
        const _id = triggerMarker[i]._id ;
        const name = triggerMarker[i].name 
        const distance = triggerMarker[i].dist/1000  
        
        var temp = new mapboxgl.Marker()
        .setLngLat(triggerMarker[i].location.coordinates).addTo(map.current)
        .setPopup(new mapboxgl.Popup().setHTML(ReactDomServer.renderToStaticMarkup(<Custom _id={_id} distance ={distance} name = {name}/>)));
        
        curr.push(temp)
       
      }

      changeMarker(curr)

  }

  const removeMarker =()=>{

    for(var i=0;i<marker.length;i++){

       marker[i].remove()

    }
    changeMarker([]);
    

  }
  

  return (
    <div className="mapui">
      
      <div ref={mapContainer} className="map-container" />
      
      <Modal_ openModal={openModal}
       changeOpenModal={changeOpenModal}
       changeIsLocation={changeIsLocation} 
       changeAddEnable={changeAddEnable} addLocation={addLocation} />

    </div>
  );
}

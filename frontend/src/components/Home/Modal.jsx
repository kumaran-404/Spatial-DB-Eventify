import React,{useRef} from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Form} from 'react-bootstrap';
import {add}  from "../../api"


function Modal_({openModal, changeOpenModal,changeIsLocation,changeAddEnable,addLocation}) {

    const ref = useRef({}) 


    const close =()=>{
        changeOpenModal(false);
        changeIsLocation(false);
        changeAddEnable(false) ;
    }

    const submit =()=>{

  
        const data = {
           location :{
             type:"Point",
             "coordinates":addLocation ,}, 
           name : ref.current.name ,
           description : ref.current.description,
           event_date : ref.current.date 
        } 
        
        add(data)

        ref.current.name =""
        ref.current.description = ""
        ref.current.date = "" 

        close()
     }

    
  
    return (
    <Modal show={openModal} >

        <Modal.Header>
          <Modal.Title>Add Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            
            <span>Your Location Drop : {JSON.stringify(addLocation)}</span>
            <Form.Control style={{margin:"10px 0px"}} onChange={e=>{ref.current.name=e.target.value}} type="text" placeholder="Event Name" />

            <Form.Control  style={{margin:"10px 0px"}} onChange={e=>{ref.current.description=e.target.value}} type="text" placeholder="Event Description" />

            <Form.Control  style={{margin:"10px 0px"}} onChange={e=>{ref.current.date=e.target.value}} type="date" placeholder="Event Date" />
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={close}>
            Close
          </Button>
          <Button variant="primary" onClick={submit}>
            Save Event
          </Button>
        </Modal.Footer>
      </Modal>
  )
}

export default Modal_
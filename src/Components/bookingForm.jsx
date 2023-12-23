import  React, { useState } from 'react'
import { Row, Col, FormControl, Button, Form } from 'react-bootstrap'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

function Bookingform(){
    const{date,time}=useParams()
    const navigate=useNavigate()
    
    const[name,setName]=useState('')
    const[email,setEmail]=useState("")
    const[phonenumber,setPhoneNumber]=useState(0)
    const[payment,setPayment]=useState(5000)

   async function  createEvent(){
        const event={
            name,
            email,
            phonenumber,
            payment,
            date,
            time
        }
      
        try {
            const response =await fetch("https://booking-app-task.onrender.com/events/bookevent",{
                method:"POST",
                body:JSON.stringify(event),
                headers:{
                    'content-type':'application/json'
                }
            })
            const data=await response.json()
            if(data.event){
                alert("Your Event Successfully Booked")
                   navigate("/")
               return console.log(data.event)
            }
            
            
        } catch (error) {
           console.log(error)
            
        }
    }


    return(
        <>
         <h1 style={{width:"100%", height:"100px",
        backgroundColor:"black" , color: 'white',
        fontWeight: "bolder", display:"flex" , justifyContent:
          "center", alignItems: "center"}}>BOOKING FORM </h1>
          <Row sm={1} md={1} lg={1}>



<Form  style={{ display: "grid", placeItems: "center", marginTop: "20px" }} >

<Col style={{ textAlign: "center", width: '50%' }} variant="success"  >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
      <Form.Label>Name</Form.Label>
      <Form.Control
        type="text" placeholder="Enter Name"
       value={name}
       onChange={(e)=>setName(e.target.value)}
        name="name"
      />
    </Form.Group></Col>
    <Col style={{ textAlign: "center", width: '50%' }} variant="success"  >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
      <Form.Label>EMAIL</Form.Label>
      <Form.Control
        type="email" placeholder="Enter email"
       value={email}
       onChange={(e)=>setEmail(e.target.value)}
        name="email"
      />
    </Form.Group></Col>
    <Col style={{ textAlign: "center", width: '50%' }} variant="success"  >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        
      <Form.Label>PHONE NUMBER</Form.Label>
      <Form.Control
        type="number" placeholder="Enter 10 Digit No"
       value={phonenumber}
       onChange={(e)=>setPhoneNumber(e.target.value)}
        name="phonenumber"
      />
    </Form.Group></Col>

  <Col style={{ textAlign: "center", width: '50%' }} variant="success"  >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

      <Form.Label>Date</Form.Label>
      <Form.Control
        type="text" placeholder="Enter date"
       value={date}
        name="date"
      />
    </Form.Group></Col>
    <Col style={{ textAlign: "center", width: '50%' }} variant="success"  >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>TIME</Form.Label>
      <Form.Control
        type="text" placeholder="Enter time"
       value={time}
        name="time"
      />
    </Form.Group></Col>
    <Col style={{ textAlign: "center", width: '50%' }} variant="success"  >
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>payment</Form.Label>
      <Form.Control
        type="number" placeholder="Enter payment"
       value={payment}
        name="payment"
      />
    </Form.Group></Col>
    <Button onClick={createEvent}>Book Event</Button>

    </Form>
    </Row>
    </>
    )
}

export default Bookingform
import React,{useState} from 'react'
import Calendar from 'react-calendar';
import { Row, Col, FormControl, Button, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';




function Bookevent(){
    
    const[date,setDate]=useState(new Date())
    const [time,setTime]=useState([])
    let bookedDate=date.toString().slice(0,15)
    const navigate=useNavigate()

     function callTime(){  
           const time=['09.00AM',"11.00AM",'03.00PM','05.00PM'] 
          setTime(time)
     
    }
  
    const onChange=(value)=>{
       
        setDate(value)    
        callTime()
       
    
    }

    return(
        <> <h1 style={{width:"100%", height:"100px",
        backgroundColor:"black" , color: 'white',
        fontWeight: "bolder", display:"flex" , justifyContent:
          "center", alignItems: "center"}}>EVENT BOOKING APP</h1>
         
       
          <Row  xs={1} sm={1} md={2} lg={2}>
           
           
            <Col style={{display:"grid",placeItems:"center"}}>
            <h2 style={{margin:"10px",textAlign:"center",fontWeight:"bolder"}}>Pick Date Here</h2>
            <div   style={{marginTop:"20px"}}>
        <Calendar onChange={onChange}/>
        <h2 
        style={{fontSize:"bolder",marginTop:"5px",textAlign:"center"}}>DATE: {bookedDate}</h2>
       
        </div>
            </Col>
            <Col style={{display:"grid",placeItems:"center"}}>
            <h2 style={{textAlign:"center",fontWeight:"bolder"}} >Event Time Schedule</h2>
            <p style={{color:"crimson"}}>*pick some date first</p>
           
            {time.length>0&&time.map((time)=>(
                <Button onClick={()=>navigate(`/booking/${bookedDate}/${time}`)} 
                style={{margin:"5px",display:"flex",alignItems:"flex-end"}}>{time}</Button>
            ))}
       
       
            </Col>

          </Row>

       
       
       
        </>
    )
}

export default Bookevent
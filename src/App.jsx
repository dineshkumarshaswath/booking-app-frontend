import React from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Bookevent from './Components/bookeevet'
import 'react-calendar/dist/Calendar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bookingform from './Components/bookingForm';


function App() {
 

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Bookevent/>}/>
        <Route path='/booking/:date/:time' element={<Bookingform/>}/>
      </Routes>
    </Router>
     
    </>
  )
}

export default App

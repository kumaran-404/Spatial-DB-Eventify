import React,{useState} from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

import Login from "./pages/Login"
import Home from './pages/Home';
import Details from './pages/Details';
import AddEvent from './pages/AddEvent';

function CustomRoutes() {
  
   var isAuth = true ;

   return(

        <Router>
            {isAuth?<ProtectedRoute/>:<PublicRoute/>}
        </Router>
   )
}

function ProtectedRoute(){

    return (
        <Routes>
            <Route path="addEvent" element={<AddEvent />} ></Route>
            <Route path="event/:id" element={<Details/>}></Route>
            <Route path="*" element={<Home/>}></Route>
        </Routes>
    )

}

function PublicRoute(){

    return (
        <Routes>
            <Route path="*" component={<Login/>} ></Route>
        </Routes>
    )

}

export default CustomRoutes
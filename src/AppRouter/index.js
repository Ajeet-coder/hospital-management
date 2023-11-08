import { Route, Routes, useNavigate } from "react-router-dom"
import HomePage from "../components/Home"
import Login from "../components/Login"
import DoctorList from "../components/DoctorList"

import Doctors1 from "../components/Doctors"
import DoctorEdit from "../components/UpdateDoctor"






const AppRouter = () => {

   
    
    return (
     <>
     <Routes>
      
        <Route path="/" element = {<Doctors1/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path='/edit/:id' element = {<DoctorEdit/>}/>
     </Routes>
     </>
    )
  }
  
  export default AppRouter
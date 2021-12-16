import react from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from './component/Home';
import Login from './component/Login';


let App  = () =>{


    return(<>

<Navbar/>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Login' element={<Login/>}/>

</Routes>

    </>)
}


export default App;
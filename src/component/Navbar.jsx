import react from "react";
import { NavLink } from "react-router-dom";

let Navbar  = () =>{


    return(<>
<nav>
<h2 className='header'>Our<span>Drive</span></h2>


<div className='nav_menu'>
  <NavLink to='/' className='Nav_item'>Home</NavLink>
  <NavLink to='/login' className='Nav_log'>Login</NavLink>

</div>

</nav>
    </>)
}


export default Navbar;
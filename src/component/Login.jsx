import react from "react";
import { NavLink } from "react-router-dom";

let Login  = () =>{

    function formCall(e){
e.preventDefault();
    }

    return(<>
<div className='login'>

<form onSubmit={formCall}>
<p>Email</p>
    <input type='email' placeholder='Enter email'/>
    
<p>Password</p>
<input type='password' placeholder='Enter password'/><br/>
<button className='submit' onClick={()=>{alert('button clicked')}}>Login</button>
</form>

<p><NavLink to='#'>Forget Password ?</NavLink> | <NavLink to='#'>Create New Account ?</NavLink></p>


</div>
    </>)
}


export default Login;
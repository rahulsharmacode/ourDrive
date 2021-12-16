import react from "react";
import ChildList from './ChildList'

let Home  = () =>{


    return(<>

<div className='container'>
    <div className='submenu'>
        {
            ChildList.map((val)=>{
                return(<div className='box'>
                
                <button className='subbtn'  onClick={()=>{alert('button clicked')}}>{val.head}</button>
                
                 </div>)
            })
        }
    </div>


    <div className='fileupload'>
        <input type='file' />
        <button onClick={()=>{alert('button clicked')}}>submit</button>
    </div>
    <div className='floadbtn'  onClick={()=>{alert('button clicked')}}><button>+</button></div>
</div>

    </>)
}


export default Home;
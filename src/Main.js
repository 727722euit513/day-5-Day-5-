import React from 'react';
import "./Main.css";
import { Link } from 'react-router-dom';
function Main() {
    return ( 
        <><div className='Mainbody'>
        <div className='boxmain' ><center>
        <form>
            <h1>Online Bankimg Application</h1>   
            <h3>Saving(A Lesson Of Life)</h3>        
        
            <div className='box1'>
            <div >
            <a><Link to="/Update">
                <button className='submit' 
                style={{height :"50px",fontSize:"20px",width:"200px"
                ,marginTop:"15px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Sign up</button></Link></a>
            </div></div>

            <div className='box2'>
            <div >
            <a><Link to="/Delete"><button className='submit' 
                style={{height :"50px",width:"200px"
                ,marginTop:"15px",fontSize:"20px",borderRadius:"10px"
                ,marginBottom:"10px"}}>log in</button></Link></a>
            </div></div>
            
        </form></center>
        </div></div>
        </>
    );
}
export default Main
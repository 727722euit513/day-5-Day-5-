import React from 'react';
import "./Delete.css"
function Delete() {
    return ( 
        <>
        <body class="qw">
        <div className='delbody'>
            <h1 className='delh1'>log in with your banking application ID</h1>        
        <div className='boxd' ><center>
        <form>
        <div className='box1'>
            <div><br></br><br></br>
            <br></br>
                <label style={{fontSize:"20px"}}>Enter Account ID : </label>
                <br></br>
                <input type="text" id='username' placeholder='ENTER ID'
                style={{color:"aliceblue",backgroundColor:"black", height :"50px",width:"200px",marginTop:"15px",borderRadius:"5px"}}/>
            </div></div><br></br><br></br>
            <button className='delsubmit' 
                style={{height :"30px",width:"120px"
                ,marginTop:"0px",borderRadius:"5px",color:"white",backgroundColor:"black"
                ,marginBottom:"10px"}}>Submit</button>
        </form></center>
        </div></div></body>
        </>
    );
}
export default Delete

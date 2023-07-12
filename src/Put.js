import React from 'react';


import "./put.css"
function Put() {
    return ( 
        <>
        <body className='putbody'>
          
        <div className='putbox' ><center>
        <form>
            <h1 style={{fontSize:"30px"}}>Book DETAILS</h1>           
            <div className='putrow' >
                <label>CONSULTING DOCTOR : </label>
                <br></br>
                <input type="text" id='username' placeholder='Doctor Name'
                style={{ height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label>Book NAME : </label>
                <br></br>
                <input type="text" id='username' placeholder='Your Name'
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label style={{marginRight:"55px"}}>Book ID : </label><label>PATIENT'S AGE : </label>
                <br></br>
                <input type="text" id='username' placeholder='ID'
                style={{height :"30px",width:"120px",marginTop:"15px",marginRight:"35px" ,borderRadius:"5px"}}/>
                <input  type="text" id='username' placeholder='Age'
                style={{height :"30px",width:"120px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label>PATIENT'S BILL : </label>
                <br></br>
                <input  type="text" id='username' placeholder='Amount'
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label >PATIENT'S HEALTH ISSUE : </label>
                <br></br>
                <input  type="text" id='username' placeholder='Health Issue'
                style={{color:"aliceblue", height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div><br></br>
            <div >
                <button className='putsubmit' 
                style={{height :"30px",width:"120px",backgroundColor:"black",borderColor:"black",color:"white"
                ,marginTop:"0px",borderRadius:"10px"
                ,marginBottom:"10px"}}>Submit</button>
            </div>
        </form></center>
        </div>
        </body>
        </>
    );
}
export default Put 
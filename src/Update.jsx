import React from 'react';

import "./Update.css"
function Update() {
    return ( 
        <>
        <body className='putbody'>
          
        <div className='putbox' ><center>
        <form>
            <h1 style={{fontSize:"30px"}}></h1>           
            <div className='putrow' >
                <label>Bank Name: </label>
                <br></br>
                <input type="text" id='Title' placeholder='Name'
                style={{ height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label>Bank Branch: </label>
                <br></br>
                <input type="text" id='Book Name' placeholder='Bank Branch'
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label style={{marginRight:"55px"}}>Account No : </label><label>CIF No : </label>
                <br></br>
                <input type="text" Pg No='username' placeholder='Account No'
                style={{height :"30px",width:"120px",marginTop:"15px",marginRight:"35px" ,borderRadius:"5px"}}/>
                <input  type="text" Pg No='username' placeholder='CIF No'
                style={{height :"30px",width:"120px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label>PAN No : </label>
                <br></br>
                <input  type="text" id='username' placeholder='PAN No'
                style={{height :"30px",width:"280px",marginTop:"15px",borderRadius:"5px"}}/>
            </div>
            <div className='putrow' >
                <label >IFSC Code : </label>
                <br></br>
                <input  type="text" id='username' placeholder='IFSC Code'
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
export default Update 
import React, { useState } from 'react'

const Dropdown = ({name, score, bonus, grade}) => {
    const [show, setShow] = useState(false);
  return ( 
   <div style={{marginBottom: "5px"}}>
     <div  onClick={() => setShow(!show)} style={{display: "flex", justifyContent: "space-between",  padding: "8px 16px", backgroundColor: "#92DCE5",
    borderTopRightRadius: "10px",
    borderBottomLeftRadius: "20px",
    borderBottomRightRadius: "5px" }}>


      <div >{name}</div>
      <div>{score}</div>
      <div>{bonus}</div>
      <div> {grade} <span style={{ cursor: 'pointer' }}>
      &#9660;</span> 
    </div>
        
        

    </div>

    {(show && <div >
        <div className='drop'>
        <div>Full-Name: Aningwu Chisom </div>
        <div>Learning Path: Frontend</div>
    
    
        </div>
       
       <div className='drop'>
       <div>Current Rank: 20</div>
        <div>Previous Rank: 150</div>
    
    
       </div>

        </div>)}
   </div>
  )
}

export default Dropdown

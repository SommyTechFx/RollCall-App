import React from 'react'
import Dropdown from './dropdown'

const App = () => {
  return (

<div className='learnable'> 
<div style={{fontSize: "40px", marginBottom: "20px", color: "#FFEFD3"}}>LEARNABLE INTERN *23</div>
<div className='Styling'>
    
    <div className='roll-call' style={{ margin: "8px 16px",}}>

<div style={{display: "flex",
justifyContent: "space-between", backgroundColor: "",marginBottom: "10px", borderRadius: "5px", fontWeight: "bold"}}>

<div style={{fontSize: "20px", padding: "8px 16px", background: "#FFC49B", borderTopLeftRadius: "25px"}}>NAME</div>
<div  style={{fontSize: "20px",  padding: "8px 16px", background: "#FFC49B"}}>SCORE(100)</div>
<div  style={{fontSize: "20px",  padding: "8px 16px", background: "#FFC49B"}}>BONUS</div>
<div  style={{fontSize: "20px",  padding: "8px 16px", background: "#FFC49B"}}>GRADE</div>


</div>


  <Dropdown name="Chisom" score="95" bonus="+5" grade="A"/>

  <Dropdown name="william" score="84" bonus="+5" grade="A"/>

<Dropdown name="Samuel" score="81" bonus="+4" grade="A"/>

<Dropdown name=" Emeka" score="78" bonus="+3" grade="A"/>

<Dropdown name=" Jessica" score="75" bonus="+5" grade="A"/>

<Dropdown name=" Micheal" score="68" bonus="+2" grade="B"/>

<Dropdown name="Ifeanyi" score="65" bonus="+5" grade="B"/>

<Dropdown name="Chigozie" score="55" bonus="+5" grade="A"/>







</div>
  </div>
</div>
    
    
  )
}

export default App

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

<Dropdown name="Chizzy" score="60" bonus="+5" grade="B"/>

<Dropdown name="Timothy" score="50" bonus="+1" grade="C"/>

<Dropdown name="Benj" score="50" bonus="+3" grade="C"/>

<Dropdown name="Ngozi" score="49" bonus="+1" grade="C"/>

<Dropdown name="Anabel" score="48" bonus="+1" grade="D"/>

<Dropdown name="Stacey " score="45" bonus="+2" grade="D"/>

<Dropdown name="Judith" score="43" bonus="+2" grade="D"/>

<Dropdown name="Mary" score="42" bonus="+2" grade="D"/>

<Dropdown name="Ugochi" score="38" bonus="+1" grade="E"/>

<Dropdown name="Eliish" score="35" bonus="+2" grade="E"/>

<Dropdown name="Chioma" score="30" bonus="+4" grade="E"/>

<Dropdown name="Willy" score="30" bonus="+4" grade="E"/>

<Dropdown name="Queen" score="28" bonus="+1" grade="F"/>

<Dropdown name=" Jessica" score="25" bonus="+1" grade="F"/>

<Dropdown name="KINGS" score="24" bonus="+2" grade="F"/>

<Dropdown name="Allen" score="20" bonus="+5" grade="F"/>

<Dropdown name="BREEZ" score="0" bonus="+5" grade="F"/>













</div>
  </div>
</div>
    
    
  )
}

export default App

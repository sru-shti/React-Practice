
import React, { useState } from 'react'
import './App.css'

function App() {
  return ( <div>
    <LightBulb/>
  </div>

  )
}
function LightBulb(){
  const [bulbOn, setBulbOn] = useState(true);

 return <div>
    <BulbState bulbOn={bulbOn} />
    <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />

  </div>
}

function BulbState({bulbOn}){ //return img bulb on/off
   return <div>
    { bulbOn ? "bulb on" : "bulb off"}
   </div>
}
function ToggleBulbState({bulbOn,setBulbOn}){

  function toggle(){
    setBulbOn(!bulbOn) // set the bulb of what oppo of bulbON
    /*  if(currentState ==true){
    return false
    }else{return true
    }    OR   setBulbOn(currentState => !currentState) 
    */
    
  }
return <div>
    <button onClick={toggle}>Toggle the bulb</button>
  </div>
}
export default App



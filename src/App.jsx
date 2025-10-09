
import React, { useState } from 'react'
import './App.css'

function App() {
  return ( <div>
    <LightBulb/>
  </div>

  )
}
function LightBulb(){
 return <div>
    <BulbState/>
    <ToggleBulbState/>

  </div>
}

function BulbState(){ //return img bulb on/off
 const [bulbOn, setBulbOn] = useState(true);
   return <div>
    { bulbOn ? "bulb on" : "bulb off"}
   </div>
}
function ToggleBulbState(){
return <div>
    <button>Toggle the bulb</button>
  </div>
}
export default App



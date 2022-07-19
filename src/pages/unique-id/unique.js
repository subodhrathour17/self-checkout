import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
  
export default function Uniue_id() {
//   const unique_id = uuid();
//   const small_id = unique_id.slice(0,8)
const [increment,setIncrement]=useState(1)
useEffect(()=>{
   setIncrement(increment+1)
},[])

   console.log(increment);
  return (
    <div className="App">
      {/* <h1>Unique ID</h1>
      <p>{unique_id}</p> */}
      <h1>Sliced Unique ID</h1>
      <button>hum kar increment</button>
      <p style={{fontSize:"300px"}}>{"555"}{"asd"}{increment}{}</p>


    </div>
  );
}
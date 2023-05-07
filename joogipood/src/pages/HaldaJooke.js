import  { useState } from 'react'
import joogidFailist from "../joogid.json"

function HaldaJooke() {
    const [joogid, uuendaJoogid] = useState (joogidFailist);
   

    function kustuta (index) {
        joogid.splice(index,1);
        uuendaJoogid(joogid.slice());
    }
    
    
  
    return (
    <div>Joogid:
        {joogid.map((element,index) => 
        <div>
            <span>{element}</span>
        <button onClick={() => kustuta(index)}>x</button>
        </div>)}
        <br />
        </div>
  )
}

export default HaldaJooke;
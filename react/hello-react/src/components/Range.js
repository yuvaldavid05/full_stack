import { useState } from "react";
import './Range.css';

function Range({ title, min, max, value, change}){
    const [num, setNum] = useState(value);
    
    function changeVal(val){
        setNum(val);

        if(typeof change == 'function'){
            change(val);
        }
    }

    return (
       <div className="range">
        <b>{title ? (<b>{title}</b>) : ' '}:</b>
        <input type="range"  min={min} max={max} value={num} onChange={ev => changeVal(ev.target.value)} />
        <input type="number"  min={min} max={max} value={num} onChange={ev => changeVal(ev.target.value)} />

       </div>
    )
}

export default Range;
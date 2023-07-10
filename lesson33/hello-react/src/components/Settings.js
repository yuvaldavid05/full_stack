import { useState } from "react";
import './Settings.css';

function Settings() {
    const [brightness, setBrightness] = useState(100);


    function changeBrightness(val) {
        setBrightness(val);
        document.querySelector('html').style.filter = `brightness(${val}%)`;
    }


    const [fontSize, setFontSize] = useState(20);

    function changeFontSize(valF) {
        setFontSize(valF);
        document.querySelector('.frame').style.fontSize = `${valF} + px`;
        
    }

    return (
        <>
            <div className="card">
                <b>רמת בהירות:</b>
                {/* <Range value={brightness} min={10} max={100} change={val => changeBrightness(val)} /> */}

                <input type="range" min="10" max="100" value={brightness} onChange={ev => changeBrightness(ev.target.value)} />
                <input type="number" min="10" max="100" value={brightness} onChange={ev => changeBrightness(ev.target.value)} />
            </div>

            <div className="card">
                <b>גודל גופן:</b>
                <input type="range" min="20" max="100" value={fontSize} onChange={ev => changeFontSize(+ev.target.value)}/>
                <input type="number" min="20" max="100" value={fontSize} onChange={ev => changeFontSize(+ev.target.value)}/>
                
            </div>
        </>
    );
}

export default Settings;
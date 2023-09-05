import { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

    return (
        <div>
            <p>{count}</p>
            <button onClick = { () => setCount(count + 1)}>+</button>
            <button onClick = { () => setCount(count - 1)}>-</button>
            <button onClick = { () => setCount(0)}>איפוס</button>
            <p style={{ fontSize: count * 5 + 'px' , margin: 0}}></p>
        </div>
    );
}

export default Counter;
import React,{useState} from "react";

export const CounterComponent = () => {
    const [count, setCount] = useState(0)
    
  return (
    <div>
        <p>increse value {count}</p>
        <button onClick={()=> setCount(count +1 )}>plus</button>
        <h5>value is {count%2==0?count+"Even":count+"ODD"}</h5>
    </div>
  )
}

import React,{useEffect, useState} from "react";


const Timer = () => {
    const [time,setTime]=useState(0);

    useEffect(()=>{
        //mounted 
        console.log("Adding new interval")
        const timer=setInterval(()=>setTime(time+1),1000)

        return function(){
            console.log("clearing new interval")
            clearInterval(timer)
        };
    },[time]);

   

  return (
    <div>
        <h1>Stop Watch</h1>
        <p>Current Time Is {time}</p>
    </div>
  )
}

export default Timer;
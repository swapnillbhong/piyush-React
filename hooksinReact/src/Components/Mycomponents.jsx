import React ,{useEffect, useState} from "react";

const Mycomponents = () => {

    const [count, setCount]= useState(0);
    const [count1, setCount1]= useState(15);

    
    

    useEffect(()=>{
        console.log('My Component is mounting ....')

        return function(){
            console.log("unmounting ....")
        };

    },[])

    useEffect(()=>{
        console.log("Count got Updated ",count);
        return function(){
            console.log("returning count",count)
        };
    },[count]);

  return (
    <>
    <h3>the Count is {count}</h3>
    <h3>the Count 2 is {count1}</h3>
    <button onClick={()=> setCount(count+1)}>Update</button>
    <button onClick={()=> setCount1(count1+1)}>Update2</button>
    </>
  )
}

export default Mycomponents
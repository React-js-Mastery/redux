import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from '../features/CounterSlice';

const Count = () => {
   const data= useSelector((state)=>state.Counter);
   const dispatch=useDispatch();
   console.log(data);
  return (
    <div>Count:
        <h1>{data.counter}</h1>
        <button onClick={()=>dispatch(Increment())}>Increment</button>
        <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    </div>
  )
}

export default Count
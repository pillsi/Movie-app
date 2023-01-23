import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';


const Card = (props) => {
  return(
  <>
  <h3>Name: {props.name}</h3>
  <h3>Type: {props.type}</h3>
  <h3>Required Credit Score: {props.requiredScore}</h3>
  </>
  )
}

const Demo = () => {

  const [count, setCount] = useState(0)

  useEffect(()=>{
    setCount(100) //每次dom reload时，count的状态就会被set回到100
  },[count]); //第二个参数array的意思是，如果count的组件reload, 它的setCount状态就会回到100，如果是空数组，那么就没有组件被调用，就不会一直reload被设置回到100

  return(
    <div className='App'>
    {/* effect案例 */}
      <div className='counter'>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h3>{count}</h3>
        <button onClick={()=>setCount(count-1)}>-</button>
      </div>
    {/* props案例 */}
      <div>
        <Card name={"Double"} type={"Credit Card"} requiredScore={"600"}/>
      </div>
    </div>
  )
}

export default Demo;

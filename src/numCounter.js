import React, { useEffect, useState } from 'react'

export default function App() {

    const [todo, setTodo] = useState([])

    const API_URL = "https://jsonplaceholder.typicode.com/todos"

    const quote = async() => {
        const response = await((await fetch(API_URL)).json())
        setTodo(response);
    }

    useEffect(()=>{
        quote();
    },[])

  return (
    <div>
    {todo.map((item, index)=>(
    <p key={index}>{item.title}</p>
    ))}
    </div>

  )
}

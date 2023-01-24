import React, { useEffect, useState } from "react";
import Footer from "./Footer";
import Quote from "./Quote";
import { data } from "./quoteData";

const App = () => {

    const [quote, setQuote] = useState(data[0])
    const [isLoading, setIsLoading] = useState(true)

    const randomise = () => {
        const randomNum = Math.floor(Math.random() * data.length)
        setQuote(data[randomNum])
    }

    useEffect(()=>{
        randomise()
        setIsLoading(false)
    },[])

  return (
    <div className="App">
      <h1>Quote generator</h1>
      {isLoading ? (<p>Now is loading...</p>):(<Quote data={quote}/>)}
      <button onClick={randomise}>Generate!</button>
      <Footer data={quote} />
    </div>
  );
};

export default App;

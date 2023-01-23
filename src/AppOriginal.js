import { useEffect, useState } from "react"
import "./App.css"
import MovieCard from "./MovieCardOriginal"
import searchIcon from "./search.svg"

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=cdc368cc"

const App = () => {
  return(
    <div className="app">
      <h1>Movie Land</h1>
        <div className="search">
          <input />
          <img src={searchIcon}/>
        </div>
        
          <div className="container">
            <div className="movie">
              <div>
                <p>111</p>
              </div>

              <div>
                <img />
              </div>

              <div>
                <span>111</span>
                <h3>111</h3>
              </div>
            </div>

          </div>
      </div>
  )
}

export default App
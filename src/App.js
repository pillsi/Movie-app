import React, { useEffect, useState } from 'react'
import "./App.css"
import MovieCard from './MovieCard'
import SearchIcon from "./search.svg"

// 📕 1. 先获取API的地址
// const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=cdc368cc"

// export default function App() {

// // 📕 2. 用async+fetch的方式请求API
// const searchMovie = async(title) => { //⭐️a.先做电影名的搜索
//   const response = await fetch(`${API_URL}&s=${title}`) //⭐️b.把请求的API保存到response的变量里
//   const data = await response.json(); //⭐️c.保存API的数据到data的变量

//   console.log(data); //⭐️d.获取searchMovie调用API里面的所有data
// }

// // 📕 3. 用useEffect，确保每次dom重加载后，API会被重新调用
// useEffect(()=>{
//   searchMovie('Spiderman') //⭐️e.只需要拿到电影名为spiderman的数组
// },[])

//   return (
//     <div className='App'>App</div>
//   )
// }

// 📕 async+fetch+try+catch的方法如下：
// export default function App() {

//   const API_DATA = "http://www.omdbapi.com/?i=tt3896198&apikey=cdc368cc" //?后面拼接的是入参

//   const searchMovie = async(title) => {
//     try{
//       const response = await fetch(`${API_DATA}&s=${title}`) //s代表入参，后端定义的搜索名称，用的get方法，实际开发会有接口文档
//     // console.log(response.json());
//     response.json().then(res=>{ //then代表请求成功，catch是捕获失败，finally不管成功失败，都会走
//       console.log(res);
//     }).finally(data=>{ //finally用得比较少
//       console.log(1);
//     }).catch(err=>{
//       console.log(2);
//       console.log(err);
//     })
//     }
//     catch(err){ //err代表try执行失败的时候，要执行的代码
//       // 比如说失败后要跳转到哪，或者提示什么...
//     }
//   // const data = await response.json() //await跟async搭配使用，执行异步。 respinse.json()就是promise
//   // console.log(data);
// }

//   // useEffect(()=>{ //处理不同的生命周期
//   //   searchMovie('women')
//   // },[]) //空数组在页面渲染完毕的时候，只执行一次

//   // 意义是等待页面加载完毕后，再去调用我的data，否则顺序就是反过来，拿不到
//   // 只要在页面加载的时候，要做什么操作，就一定要用它

//   searchMovie();
  

//   return(
//     <>
//       <h1>App</h1>
//     </>
//   )
// }

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=cdc368cc"


const App = () => {
  const [movies, setMovies] = useState([])
  const [searchItem, setSearchItem] = useState('')

  const searchMoive = async(title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()
    setMovies(data.Search)
  }
  
  // const movieList = {
  //     "Title": "Spiderman the Verse",
  //     "Year": "2019–",
  //     "imdbID": "tt12122034",
  //     "Type": "series",
  //     "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
  // }
  

  useEffect(()=>{
    searchMoive('Spiderman')
  },[])

  return(
    <div className='app'> 
      <h1>MovieLand</h1> 
      <div className='search'>
        <input 
          placeholder='Search for movies'
          value={searchItem}
          onChange={(e)=>setSearchItem(e.target.value)}
        />
        <img 
          src={SearchIcon} alt='search'
          onClick={()=>searchMoive(searchItem)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container'>
        {movies.map((movie)=>( //📝这里用{}和()的区别是什么？
        /* <div className='movie'>
          <div>
              <p>{movieList.Year}</p>
          </div>

          <div>
          <img src={movieList.Poster !== 'N/A' ? movieList.Poster : "http://via.placeholder.com/400"} alt={movieList.title} />
          </div>

          <div>
            <span>{movieList.Type}</span>
            <h3>{movieList.Title}</h3>
          </div>
      </div> */
      <MovieCard movie={movie}/>
      ))}
      </div>): (
        <div className='empty'>
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  )
}

export default App



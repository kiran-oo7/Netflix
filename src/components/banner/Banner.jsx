import { useEffect, useState } from "react"
import { API_KEY, Img_Url } from "../../constants/constants"
import "./banner.css"
import axios from "../../axios"

const Banner = () => {
  const [movie, setMovie] = useState() 
  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data);
      setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    })
  }, [])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? Img_Url+movie.backdrop_path : ""})`}}
    className="banner">
        <div className="content">
            <h1 className="titles">{movie ? movie.title : ""}</h1>
            <div className="buttons">
                <button className="button">Play</button>
                <button className="button">My list</button>
            </div>
            <h1 className="description">{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade"></div>
    </div>
  )
}

export default Banner
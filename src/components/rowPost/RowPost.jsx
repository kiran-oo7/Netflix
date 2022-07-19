import "./rowPost.css"
import { Img_Url,API_KEY } from "../../constants/constants"
import { useEffect, useState } from "react"
import axios from "../../axios"
import YouTube from "react-youtube"

const RowPost = (props) => {
  const [pic,setPic] = useState([])
  const [url,setUrl] = useState("")
  useEffect(() => {
    axios.get(props.url)
    .then((response)=>{
      console.log(response.data);
      setPic(response.data.results.sort( ()=>Math.random()-0.5 ))
    })
  }, [])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  const movieID = (id)=>{
    console.log(id)
    axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
      if(response.data.results.length!==0){
        setUrl(response.data.results[2])
        console.log(response.data.results);
      }else{
        console.log('Trailer not available');
      }
    })  }
  return (
    <div className='row'>
        <div className="heading"> 
            <h1>{props.title}</h1>
        </div>
        <div className="posts">
          {pic.map((obj)=>

            <img onClick={()=>movieID(obj.id)} src={`${pic ? Img_Url+obj.backdrop_path : ""}`} alt="" className={props.small ? "imgSmall" : "img"} />
          )}
        </div>
        {url && <YouTube videoId={url.key} opts={opts}/>}
    </div>
  )
}

export default RowPost
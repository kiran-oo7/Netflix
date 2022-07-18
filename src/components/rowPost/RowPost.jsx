import "./rowPost.css"
import { Img_Url } from "../../constants/constants"
import { useEffect, useState } from "react"
import axios from "../../axios"

const RowPost = (props) => {
  const [pic,setPic] = useState([])
  useEffect(() => {
    axios.get(props.url)
    .then((response)=>{
      console.log(response.data);
      setPic(response.data.results.sort( ()=>Math.random()-0.5 ))
      //setPic([response.data.results[Math.floor(Math.random()*response.data.results.length)]])
    })
  }, [props])
  
  return (
    <div className='row'>
        <div className="heading"> 
            <h1>{props.title}</h1>
        </div>
        <div className="posts">
          {pic.map((obj)=>

            <img src={`${pic ? Img_Url+obj.backdrop_path : ""}`} alt="" className={props.small ? "imgSmall" : "img"} />
          )}
        </div>
    </div>
  )
}

export default RowPost
import "../styles/weadermusicitem.scss"
import { Link } from "react-router-dom";

//여기다 노래 정보 받아오는 페이지
const WeatherMusicItem = (props) => {
const{ music } = props;
console.log(music)
return (
<div className="weadermusicitem">
            <div className="weathersinger">
            <Link to={"/Musicplay/" + music.title} >
            <div className="singerimg">
            
                
              <img
              className="singerCover"
              src={process.env.PUBLIC_URL + `${music.image}`}
              alt="Second slide"/>
               
              <div className="a">
              <Link to={"/Musicplay/" + music.title} style={{color:"white"}}>
                <div className="b">→</div>
                </Link>
                <p>{music.title}</p>
                <p>{music.name}</p>
                <p>{music.album}</p>
              </div>
            </div>
            </Link>
            {/* <Link to={"/Musicplay/" + music.title}>
            <div className="singerinfo">
              <img
              className="singerLP"
              src={process.env.PUBLIC_URL + `${music.image}`}
              alt="Second slide"/>
            </div>
            </Link> */}
            
        </div>
            
        </div>

)
}

export default WeatherMusicItem;
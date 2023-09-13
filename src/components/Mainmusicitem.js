import { Link } from "react-router-dom";
import "../styles/mainmusicitem.scss"

const MainMusicItem =(props) => {
const{ music } = props;
return(

<>

 <div className="mainmusicitem">
 <Link to={"/Musicplay/" + music.title} >
  <div className="mainmusicitemcover">
    <img className="mainmusicitemcoverimg" src={process.env.PUBLIC_URL + `${music.image}`} alt="Second slide" />
  </div>
 </Link> 

  <div className="mainmusicinfo">
    <p className="info1">{music.title}</p>
    <p className="info2"> {music.name}</p>
  </div>
 </div>


</>
)
}

export default MainMusicItem;
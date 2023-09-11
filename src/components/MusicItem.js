import { Link } from "react-router-dom";
import "../styles/musicitem.scss"
//여기다 노래 정보 받아오는 페이지
const MusicItem = (props) => {
    const{ music } = props;
    console.log(music)
    return (
        
        <div className="musicitem">
           
            <div className="Topmusic">
            <div className="Topnum">{music.id}</div>
                    <div className="TopCoverbox">
                    <img
                        className="TopCover"
                        src={process.env.PUBLIC_URL + `${music.image}`}
                        alt="Second slide"
                    />
                    </div>
                   
                    <div className="Topinfo">
                        <p className="info1">{music.title}</p>
                        <p className="info2"> {music.name}</p>
                        <p className="info3">{music.album}</p>
                    </div>

                    <Link to={"/Musicplay/" + music.title}>
                    <div className="Topplay">
                        <button className="Topplaybtn">▶︎</button>
                        </div>
                        </Link>
                </div>
                
            
        </div>
        
    )
}

export default MusicItem;
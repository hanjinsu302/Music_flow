import { useParams, useNavigate, Link } from "react-router-dom";
import "../styles/musicplay.scss"

const Musicplay = (props) => {
    const {musics} = props;

    const {musictitle} =useParams();
    console.log(musictitle);

    const navigate = useNavigate();


    const [targetMusic] = musics.filter((p) => p.title === musictitle);
    console.log(targetMusic);
    if (!targetMusic) {
        return <main className="ProductDetailPage">존재하지 않는 음원입니다</main>;
      }

  
    return(
        <main className="Musicplay">
            <div className="Playbox">
                <div className="img">
                    <div className="s">{targetMusic.title}</div>
                    <Link to={"/Singer/" + targetMusic.name}>
                    <div className="a">{targetMusic.name}＞</div>
                    </Link>
                    <img
                        className="PlayCover"
                        src={process.env.PUBLIC_URL + `${targetMusic.image}`}
                        alt="Second slide"/>
                </div>
               
                <audio autoplay controls>
    <source src={process.env.PUBLIC_URL + `${targetMusic.audio}`} type="audio/mp3"/>
</audio>
            </div>
            
        </main>
    )

}

export default Musicplay;
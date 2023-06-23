// import { useParams, useNavigate, Link } from "react-router-dom";
// import AudioPlayer from 'react-h5-audio-player';
// import 'react-h5-audio-player/lib/styles.css';
// import "../styles/musicplay.scss";
// import { useState } from "react";

// const Musicplay = (props) => {
//     const { musics } = props;
//     const { musictitle } = useParams();
//     console.log(musictitle);

//     const navigate = useNavigate();
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const targetMusic = musics[currentIndex];

//     if (!targetMusic) {
//         return <main className="ProductDetailPage">존재하지 않는 음원입니다</main>;
//     }

//     const handleNextClick = () => {
//         setCurrentIndex(prevIndex => prevIndex + 1);
//     };

//     const handlePrevClick = () => {
//         setCurrentIndex(prevIndex => prevIndex - 1);
//     };

//     return (
//         <main className="Musicplay">
//             <div className="beforebtn" onClick={handlePrevClick}>≪</div>
//             <div className="Playbox">
//                 <div className="s">{targetMusic.title}</div>
//                 <Link to={"/Singer/" + targetMusic.name}>
//                     <div className="a">{targetMusic.name}＞</div>
//                 </Link>
//                 <div className="img">
//                     <img
//                         className="PlayCover"
//                         src={process.env.PUBLIC_URL + `${targetMusic.image}`}
//                         alt="Second slide"
//                     />
//                 </div>
//             </div>
//             <div className="nextbtn" onClick={handleNextClick}>≫</div>
//             <AudioPlayer
//                 className="audioplayer"
//                 autoPlay
//                 src={process.env.PUBLIC_URL + `${targetMusic.audio}`}
//                 onPlay={e => console.log("onPlay")}
//             />
//         </main>
//     );
// };

// export default Musicplay;




import { useParams, useNavigate, Link } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "../styles/musicplay.scss"

const Musicplay = (props) => {
    const {musics} = props;


    const {musictitle} =useParams();
    console.log(musictitle);

    const navigate = useNavigate();

    const Player = () => (
        <AudioPlayer
          autoPlay
          src="http://example.com/audio.mp3"
          onPlay={e => console.log("onPlay")}
          // other props here
        />
      );


    const [targetMusic] = musics.filter((p) => p.title === musictitle);
    console.log(targetMusic);
    if (!targetMusic) {
        return <main className="ProductDetailPage">존재하지 않는 음원입니다</main>;
      }

  
    return(
        <main className="Musicplay">
            <div className="beforebtn">≪</div>
            <div className="Playbox">
                    <div className="s">{targetMusic.title}</div>
                    <Link to={"/Singer/" + targetMusic.name}>
                    <div className="a">{targetMusic.name}＞</div>
                    </Link>
                    
                <div className="img">
                    <img
                        className="PlayCover"
                        src={process.env.PUBLIC_URL + `${targetMusic.image}`}
                        alt="Second slide"/>
                </div>
               
            </div>
                {/* <audio autoplay controls className="audio">
    <source src={process.env.PUBLIC_URL + `${targetMusic.audio}`} type="audio/mp3"/>
</audio> */}
<div className="nextbtn">≫</div>
<AudioPlayer
className="audioplayer"
          autoPlay
          src={process.env.PUBLIC_URL + `${targetMusic.audio}`}
          onPlay={e => console.log("onPlay")}
          // other props here
        />
            
        </main>
    )

}
export default Musicplay;



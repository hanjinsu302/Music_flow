import "../styles/mainsinger.scss"


const Mainsinger = ({}) => {
    return (
        <div className="todaymusicbox">
            <div className="todaymusic">오늘의 추천 음악 〉</div>
        <div className="Mainsinger"> 
        <div className="singer">
            <div className="singerimg">
            <img
            className="singerCover"
            src={process.env.PUBLIC_URL + "/images/1600w-5tlu9r69vlc.webp"}
            alt="Second slide"
          />
            </div>
            <div className="singerinfo">
            <img
            className="singerLP"
            src={process.env.PUBLIC_URL + "/images/1600w-5tlu9r69vlc.webp"}
            alt="Second slide"
          />
            </div>
            
        </div>
        
        <div className="singer">
            <div className="singerimg">
            <img
            className="singerCover"
            src={process.env.PUBLIC_URL + "/images/ec57e66d0f563.jpeg"}
            alt="Second slide"
          />
            </div>
            <div className="singerinfo">
            <img
            className="singerLP"
            src={process.env.PUBLIC_URL + "/images/ec57e66d0f563.jpeg"}
            alt="Second slide"
          />
            </div>
        </div>
        <div className="singer">
            <div className="singerimg">
            <img
            className="singerCover"
            src={process.env.PUBLIC_URL + "/images/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif"}
            alt="Second slide"
          />
            </div>
            <div className="singerinfo">
            <img
            className="singerLP"
            src={process.env.PUBLIC_URL + "/images/newjeans_bunny.jpeg"}
            alt="Second slide"
          />
            </div>
        </div>
        <div className="singer">
            <div className="singerimg">
            <img
            className="singerCover"
            src={process.env.PUBLIC_URL + "/images/15175845.jpeg"}
            alt="Second slide"
          />
            </div>
            <div className="singerinfo">
            <img
            className="singerLP"
            src={process.env.PUBLIC_URL + "/images/15175845.jpeg"}
            alt="Second slide"
          />
            </div>
        </div>
        
        
        </div>
        </div>
        
    )
}

export default Mainsinger;
import "../styles/mainchart.scss"

const Mainchart = ({props}) => {
    console.log(props)
    // const {products}= props;
    // console.log(products)
    return(
        <div>
            <div className="todaychart">인기차트 〉</div>
        <div className="Mainadd">
        
            <div className="Topko">
                <div className="Topmusic">
                    <div className="TopCoverbox">
                    <img
                        className="TopCover"
                        src={process.env.PUBLIC_URL + "/images/wrWOftbH09kzkxQAu6oLODje3kbkPD7U2VZntoGvAM-vn-RooTNigvVUyY3JYSlij1Idmq2tBdJXx0JL9qOoPQ.gif"}
                        alt="Second slide"
                    />
                    </div>
                    <div className="Topnum">1</div>
                    <div className="Topinfo">
                        <div>OMG</div>
                        <div>NewJeans</div>
                        <div>◎ Newjeans'OMG'</div>
                    </div>
                    <div className="Topplay">
                        <button className="Topplaybtn">▶︎</button>
                        </div>
                </div>
            </div>
            <div className="Topen">
            <div className="Topmusic">
                    <div className="TopCoverbox">
                    <img
                        className="TopCover"
                        src={process.env.PUBLIC_URL + "/images/15175845.jpeg"}
                        alt="Second slide"
                    />
                    </div>
                    <div className="Topnum">1</div>
                    <div className="Topinfo">
                        <div>Peaches </div>
                        <div>	Justin Bieber</div>
                        <div>◎ 	Justice</div>
                    </div>
                    <div className="Topplay">
                        <button className="Topplaybtn">▶︎</button>
                        </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Mainchart;
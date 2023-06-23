import MusicItem from "../components/Musiccategoryitem";
import "../styles/categorymusic.scss"

const Categorymusic = (props) => {
    const {musics} = props;
    console.log(musics)

    const dance = musics.filter((e) => e.category === "댄스");
    const pop = musics.filter((e) => e.category === "POP");
    return(
        <div className="Categorymusic">
            <div className="cate">DANCE〉</div>
            <div className="category">
                {/* 카테고리:댄스 음악 가져오는 부분 */}
                {dance.map((music) => {
                            return <MusicItem key={music.id} music={music} />;
                            })}
            </div>
            <div className="cate">POP〉</div>
            <div className="category">
                {/* 카테고리:댄스 음악 가져오는 부분 */}
                {pop.map((music) => {
                            return <MusicItem key={music.id} music={music} />;
                            })}
            </div>
        </div>
        
    )
}

export default Categorymusic;
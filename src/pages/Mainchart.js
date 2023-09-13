import "../styles/mainchart.scss"
import MusicItem from "../components/MusicItem";

const Mainchart = (props) => {
    const {musics} =props;
    const topen = musics.filter((e) => e.country === "해외").slice(0, 5);
    const topko = musics.filter((e) => e.country === "국내").slice(0, 5);
   console.log(musics);
    return(
        <div>
         <div className="todaychart">인기차트 〉</div>
            <div className="Mainadd">
                <div className="Topko">
                    <div>
                        {topko.map((music) => {
                        return <MusicItem key={music.id} music={music} />;
                        })}
                    </div>
                </div>

                <div className="Topen">
                    <div>
                        {topen.map((music) => {
                        return <MusicItem key={music.id} music={music} />;
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mainchart;
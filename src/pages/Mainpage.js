import "../styles/mainpage.scss";
import Mainchart from "./Mainchart";
import Mainmusic from "./Mainmusic";
import Mainsinger from "./Mainsinger";
import Musicplay from "./Musicplay";


const Mainpage = (props) => {
    const{musics} = props;
    console.log(musics);
    
    return (
        <div >
            <Mainmusic musics={musics}/>
            {/* <Mainchart/> */}
            <Mainsinger />
            {/* <Musicplay /> */}
        </div>
    )

}

export default Mainpage;
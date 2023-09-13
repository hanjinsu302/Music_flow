import "../styles/mainpage.scss";
import Cookie from "./Cookie";
import Mainchart from "./Mainchart";
import Mainmusic from "./Mainmusic";
import Mainsinger from "./Mainsinger";
import Musicplay from "./Musicplay";
import Weather from "./Weather";


const Mainpage = (props) => {
    const{musics} = props;
    console.log(musics);
    
    return (
        <div >
            <Mainmusic musics={musics}/>
            {/* <Mainchart/> */}
            <Weather musics={musics}/>
            <Mainsinger />
            {/* <Musicplay /> */}
          
        </div>
    )

}

export default Mainpage;
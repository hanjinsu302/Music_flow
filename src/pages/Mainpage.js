import "../styles/mainpage.scss";
import Mainchart from "./Mainchart";
import Mainmusic from "./Mainmusic";
import Mainsinger from "./Mainsinger";
import Musicplay from "./Musicplay";


const Mainpage = ({}) => {
    
    return (
        <div >
            <Mainmusic/>
            <Mainchart/>
            <Mainsinger />
            <Musicplay />
        </div>
    )

}

export default Mainpage;
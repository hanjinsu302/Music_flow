import "../styles/mainmusic.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import Mainmusicitem from"../components/Mainmusicitem"



const MainMusic = (props)=> {
const {musics} = props;
console.log(musics)
const img1 = "/images/free-icon-dumbbell-2307827.png"
const img = "/images/free-icon-light-bulb-2988036.png"
const topen = musics.filter((e) => e.country === "해외");




return (
<div className="Mainmusic">
  <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={()=> console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
    <SwiperSlide>
      <div className="m">
        <p className="p">선선한 날씨, 드라이브를 책임질 노래 {musics.image}</p>
        <div className="K">
        <div>
                        {topen.map((music) => {
                        return <Mainmusicitem key={music.id} music={music} />;
                        })}
                    </div>

        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="m1">
        <p className="p">집중이 필요할 때, 집중력을 올려주는 노래</p>
        <img src={img}  className="img1"/>

      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="m2">
        <p className="p">오.운.완!, 당신의 운동을 책임질 노래</p>
        <img src={img1}  className="img1"/>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="m">
        <p className="p">선선한 날씨, 드라이브를 책임질 노래</p>
      </div>
    </SwiperSlide>
    ...
  </Swiper>
</div>
)
}

export default MainMusic;
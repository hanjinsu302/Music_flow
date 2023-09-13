import "../styles/mainmusic.scss";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import MainMusicItem from"../components/Mainmusicitem"



const MainMusic = (props)=> {
const {musics} = props;
const img = "/images/free-icon-light-bulb-2988036.png"
const img1 = "/images/free-icon-dumbbell-2307827.png"
const img2 = "/images/free-icon-car-5670281.png"
const drive = musics.filter((e) => e.country === "국내").slice(0, 8);
const concentration = musics.filter((e) => e.style === "Concentration").slice(0, 8);




return (
<div className="Mainmusic">
  <Swiper spaceBetween={50} slidesPerView={1} onSlideChange={()=> console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    >
    <SwiperSlide>
      <div className="m">
        <p className="p">선선한 날씨, 드라이브를 책임질 노래 {musics.image}</p>
        <img src={img2} className="img2" />
        <div className="mainmusicbox">
        <div className="music-grid">
            {drive.map((music) => {
            return<MainMusicItem key={music.id} music={music} />
            })}
          </div>
        </div>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="m1">
        <p className="p">집중이 필요할 때, 집중력을 올려주는 노래</p>
        <img src={img} className="img1" />
        <div className="mainmusicbox">
        <div className="music-grid">
            {concentration.map((music) => {
            return<MainMusicItem key={music.id} music={music} />
            })}
          </div>
        </div>

      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="m2">
        <p className="p">오.운.완!, 당신의 운동을 책임질 노래</p>
        <img src={img1} className="img1" />
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
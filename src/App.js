import { BrowserRouter, Route, Routes,} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

//페이지 import
import Musicplay from "./pages/Musicplay";
import Singer from "./pages/Singer";
import Categorymusic from "./pages/Categorymusic";
import MainMusic from "./pages/Mainmusic";
import Cookie from "./pages/Cookie";
import Mainpage from "./pages/Mainpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainchart from "./pages/Mainchart";
//스타일 import
import "./styles/App.css"
//데이터
import musics from "./json/musics.json"
import Weather from "./pages/Weather";


function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');
  const [Color, setColor] = useState('black');
  const [mode, setMode] = useState('다크 모드');

  
  
  
  

  

  // 다크모드/ 라이트모드 변경 함수
  const toggleMode = () => {
    if (mode === '다크 모드') {
      setBackgroundColor('#282c34');
      setColor('white');
      setMode('라이트 모드');
    } else {
      setBackgroundColor('white');
      setColor('black');
      setMode('다크 모드');
    }
  };
 

  return (
    <div className="App" style={{ backgroundColor, color: Color }}>
      <BrowserRouter>
      <Header toggleMode={toggleMode} mode={mode}/>
      <Cookie />
      <Routes>
      <Route path="/" element={<Mainpage musics={musics}/>} />
      <Route path="/Mainchart" element={<Mainchart musics={musics} />} />
      <Route path="/Musicplay/:musictitle" element={<Musicplay musics={musics}/>} />
      <Route path="/Singer/:singername" element={<Singer musics={musics}/>}/>
      <Route path="/Categorymusic" element={<Categorymusic musics={musics}/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;

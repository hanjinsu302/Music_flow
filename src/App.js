import { BrowserRouter, Route, Routes,} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
//페이지 import
import Mainpage from "./pages/Mainpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Mainchart from "./pages/Mainchart";
//스타일 import
import "./styles/App.css"
//데이터
import musics from "./json/musics.json"
import Musicplay from "./pages/Musicplay";
import Singer from "./pages/Singer";
import Categorymusic from "./pages/Categorymusic";

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Mainpage />} />
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

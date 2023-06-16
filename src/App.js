import { BrowserRouter, Route, Routes,} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
//페이지 import
import Mainpage from "./pages/Mainpage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import music from "./json/music.json"
import Mainchart from "./pages/Mainchart";
//스타일 import
import "./styles/App.css"

function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Mainpage />} />
      <Route path="/Mainchart" element={<Mainchart />} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

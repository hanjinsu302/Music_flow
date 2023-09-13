import "../styles/header.scss"
import React, { useState } from 'react';
import { useParams, useNavigate, useSearchParams, } from "react-router-dom";


const Header = ({ toggleMode, mode }) => {
  const navigate = useNavigate();
  


    return (
<div className="Header">
  <div className="Header_Logo" onClick={() => navigate("/")}>Music Flow</div>
  <div className="Header_Category" onClick={() => navigate("/Mainchart")}> 인기차트</div>
  <div className="Header_Category" onClick={() => navigate("/Categorymusic")}>장르별</div>
  <div className="Header_Category">###</div>
  <input type="text" className="Header_input" placeholder=" 검색어를 입력하세요"/>
  <button onClick={toggleMode}>{mode}</button>
</div>
    )

}

export default Header;
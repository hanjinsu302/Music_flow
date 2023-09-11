import "../styles/header.scss"

import { useParams, useNavigate, useSearchParams } from "react-router-dom";


const Header = ({}) => {
  const navigate = useNavigate();
    return (
//         <nav className="navbar navbar-expand-lg bg-light">
//   <div className="container-fluid">
//     <a className="navbar-brand" href="/">Music Flow</a>
//     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
//     <button onClick={() => navigate("/Mainchart")} className="headerbtn">인기차트</button>
//     <button onClick={() => navigate("/Categorymusic")} className="headerbtn">장르별</button>
    
        
       
//       </ul>
//       <form className="d-flex" role="search">
//         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//         <button className="btn btn-outline-success" type="submit">Search</button>
//       </form>
//     </div>
//   </div>
// </nav>
<div className="Header">
  <div className="Header_Logo" onClick={() => navigate("/")}>Music Flow</div>
  <div className="Header_Category" onClick={() => navigate("/Mainchart")}> 인기차트</div>
  <div className="Header_Category" onClick={() => navigate("/Categorymusic")}>장르별</div>
  <div className="Header_Category">###</div>
  <input type="text" className="Header_input" placeholder=" 검색어를 입력하세요"/>
</div>
    )

}

export default Header;
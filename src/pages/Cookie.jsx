import React, { useState, useEffect } from 'react';
import "../styles/cookie.scss"


function Cookie() {
  const [showModal, setShowModal] = useState(true); 
  const [disableForToday, setDisableForToday] = useState(false); 

  // 모달 창을 닫는 함수
  const closeModal = () => {
    setShowModal(false);
  };

 
  const handleDisableForToday = () => {
    setDisableForToday(!disableForToday);
    
    sessionStorage.setItem('disableModalForToday', !disableForToday);
  };

  
  useEffect(() => {
    const sessionState = sessionStorage.getItem('disableModalForToday');
    if (sessionState === 'true') {
      setDisableForToday(true);
    }
  }, []);

  return (
    <div className="Cookie">
   {showModal && !disableForToday && (

   <div className="modal">

     <div className='modalbtnbox'>

     <div onClick={closeModal} className="modalbtn">Ⅹ</div>
     </div>
     <h2 className='modalh2'>이것은 광고다! 이것은 광고다! 이것은 광고다!</h2>
     <label className='modallabel'>
       <input type="checkbox" checked={disableForToday} onChange={handleDisableForToday}  className="modalinput"/>
       오늘 하루 동안 열지 않기
     </label>

   </div>
   )}

 </div>
  );
}

export default Cookie;

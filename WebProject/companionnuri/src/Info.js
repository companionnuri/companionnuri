import React, { useState } from "react";
import Modal from "react-modal";
import styles from "./css/Info.module.css";

function Info() {
  const buttonClick2 = () => {
    setModalIsOpen(false);
    window.location.href = "/Main";
  };

  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div>
      <div className={styles.modalBackground}>
        <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} className={styles.modalContainer}>
          <div className={styles.modalContent}>
            <div className={styles.modalContentMessage}>
              <div className={styles.modalContentMessageHd}>
                <h2>🐾 반려누리 🐱</h2>
                <button onClick={buttonClick2} className={styles.modalContentMessageClose}>
                  <i class="fa-solid fa-xmark"></i>
                </button>
              </div>
              <p>
                안녕하세요. <b>반려누리</b> 웹 서비스를 이용해주셔서 감사합니다.<br/>
                반려누리는 반려동물과 다양한 추억을 쌓고자,<br/>집 내부 뿐 아니라 외부에서도 함께할 수는 없을까 하는 고민속에서 나온 서비스로<br />
                <b>반려동물과 외부에서 함께 할 수 있는 공간</b>을 찾아 제공해줍니다.
              </p>
              <p>반려누리에서는 <b>지역별/카테고리별</b>로 검색이 가능합니다.<br /> 지역별 탭을 클릭하여 찾고자 하는 지역을 검색하실 수 있으며, <br/> 
              카테고리별 탭을 이용하여 펜션, 숙박, 미용, 병원 등의 원하시는 장소에 대한 정보를 얻을 수 있습니다.</p>
              <p>그럼 반려누리에서 즐거운 시간 보내시길 바랍니다. 이용해주셔서 감사합니다.<br/><small>(상단의 x버튼을 눌러 이동해주세요.)</small></p>
              
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Info;

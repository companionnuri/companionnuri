import React, { useState } from "react";
import Modal from "react-modal";

function Info() {
  const buttonClick2 = () => {
    setModalIsOpen(false);
    window.location.href = "/Main";
  };

  const [modalIsOpen, setModalIsOpen] = useState(true);
  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        어서와~ 반려누리는 처음이지? 오류가 있어? 여기로 와서 알려줘^.^
        ~~~~~~~~~~ 이슈 ~~~~~~~~~ 문의사항 있어?? 여기로 와서 알려줘~~~~~~~
        <button onClick={buttonClick2}>X</button>
      </Modal>
    </div>
  );
}

export default Info;

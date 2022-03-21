import React, { useState, } from 'react';
import Modal from 'react-modal';

function Info() {

    const buttonClick2 = () => {
        setModalIsOpen(false)
        window.location.href = "/"
    }

    const [modalIsOpen, setModalIsOpen] = useState(true);
    return (
        <div>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                This is Modal content
                <button onClick={buttonClick2}>X</button>
            </Modal>
        </div>
    );
}

export default Info;


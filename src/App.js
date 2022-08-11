import React, { useState } from "react";

import "./App.css";
import Modal from "./components/Modal";
import Backdrop from "./components/Backdrop";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function openModalHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="page">
      <button className="openModal-btn" onClick={openModalHandler}>
        Show popup
      </button>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onSave={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default App;

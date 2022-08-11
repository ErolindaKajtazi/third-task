import React from "react";

import "./Modal.css";

function Modal(props) {

  function cancelHandler() {
    props.onCancel();
  };

  function saveHandler() {
    props.onSave();
  };
  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="title">
          <p className="theme-color">Theme color</p>
          <p className="change-theme">Change Theme</p>
        </div>
        <div className="body">
          <div className="row row-1">
            <p>Font color</p>
            <div className="aside">
              <p className="">#444444</p>
              <button className="btn btn-col1"></button>
            </div>
          </div>
          <div className="row row-2">
            <p>Background color</p>
            <div className="aside">
              <p className="">#FFFFFF</p>
              <button className="btn btn-col2"></button>
            </div>
          </div>
          <div className="row row-3">
            <p>Button Color</p>
            <div className="aside">
              <p className="">#2072EF</p>
              <button className="btn btn-col3"></button>
            </div>
          </div>
          <div className="row row-4">
            <p>Button Border Color</p>
            <div className="aside">
              <p className="">#2072EF</p>
              <button className="btn btn-col4"></button>
            </div>
          </div>
          <div className="row row-5">
            <p>Button Mouseover Color</p>
            <div className="aside">
              <p className="">#0053D1</p>
              <button className="btn btn-col5"></button>
            </div>
          </div>
        </div>
        <div className="footer">
          <button className="btn-f cancel" onClick={cancelHandler}>Cancel</button>
          <button className="btn-f save" onClick={saveHandler}>Save</button>
        </div>
      </div>
    </div>
  );
}
export default Modal;

import React from "react";

function StartComponent({ setStart }) {
  return (
    <div className="container-app d-flex justify-content-center align-items-center flex-column">
      <img className="logo-and-button" src="./assets/img/logo.png" alt="logo" />
      <button
        type="button"
        className="btn text-light glass fw-bolder logo-and-button"
        onClick={() => setStart(false)}
      >
        Inizia
      </button>
    </div>
  );
}

export default StartComponent;

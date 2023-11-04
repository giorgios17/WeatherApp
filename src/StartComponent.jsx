import React from "react";

function StartComponent({setStart}) {
  return (
    <div className="container pt-5">
      <div>
        <img className="logo-and-button" src="./assets/img/logo.png" alt="logo" />
      </div>
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

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Menu.css";

export const Menu = () => {
  return (
    <main>
      <div className="container">
        <div className="d-flex justify-content-center">
          <h1 className="">KEN G</h1>
        </div>
        <div className="d-flex justify-content-center">
          <h1>PERSONAL TRAINER</h1>
        </div>
        <div className="d-flex justify-content-center">
          <button className="main-button btn btn-lg">INICIAR</button>
        </div>
      </div>
    </main>
  );
};

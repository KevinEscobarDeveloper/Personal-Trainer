import React from "react";
import "./CSS/Inicio.css";
import image from "./images/Img.jpg";

export const Inicio = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>BIENVENIDO</h1>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            tempus eget lectus non lacinia. Sed varius, turpis ut sodales
            rutrum, neque sapien tristique arcu, et malesuada dui sapien vitae
            nunc. Nunc venenatis lorem at molestie auctor. Praesent vitae mauris
            elit. Morbi sit amet leo eu ante luctus euismod. Donec ac.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dolor
            leo, finibus ac est non, sodales laoreet eros. Praesent et justo
            felis. Duis auctor nisi nisl, vitae efficitur lacus commodo sit
            amet. Mauris in enim ac massa tempor commodo. Vestibulum molestie
            lectus non odio molestie, a consectetur dolor accumsan. Integer
            tristique placerat nisl, non dapibus mauris mollis et. Orci varius
            natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aliquam eget ante non quam eleifend dignissim sit
            amet sed elit. Proin sodales justo nec molestie porta. Fusce et eros
            eget enim vehicula rhoncus ac sit amet felis. Vivamus sit amet
            rutrum purus. Sed malesuada leo in eros vehicula, quis consequat
            metus gravida. Aliquam eu blandit elit. Vestibulum aliquet risus ac
            nunc facilisis luctus. In vitae tellus libero. Suspendisse potenti.
            Integer porttitor porta sapien, et tristique purus elementum ut. Sed
            leo purus, bibendum ac tellus sit amet, ultrices convallis augue.
          </p>
          <button className="btn button">CONÓCEME</button>
        </div>
        <div className="col">
            <div className="img">
              <img src={image} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

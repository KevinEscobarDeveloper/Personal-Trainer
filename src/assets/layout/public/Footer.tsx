import React, { useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CSS/Footer.css";
import facebookImage from "./images/facebook.png";
import instagramImage from "./images/instagram.png";
import tiktokImage from "./images/tiktok.png";
import linkedinImage from "./images/linkedin.png";

const socialMediaImages = [
  <img key="facebook" src={facebookImage} alt="Facebook logo" />,
  <img key="Instagram" src={instagramImage} alt="Instagram logo" />,
  <img key="Tiktok" src={tiktokImage} alt="Tiktok logo" />,
  <img key="Linkedin" src={linkedinImage} alt="Linkedin logo" />
];

const Footer: React.FC = () => {
  const memoizedSocialMediaImages = useMemo(() => socialMediaImages, []);

  return (
    <footer>
      <div className="footer-container container">
        <div className="row">
          <div className="col-sm">
            <a href="">Terminos de uso</a>
          </div>
          <div className="col-sm">
            <a href="">Politicas de privacidad</a>
          </div>
          <div className="col-sm">
              <a href="">Preguntas frecuentes</a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="row  d-inline-flex p-2 ">
          {memoizedSocialMediaImages.map((image, index) => (
            <div className="col d-inline-flex p-2" key={index}>
              {image}
            </div>
          ))}
        </div>
      </div>
      <div className="text-center p-4">
    <a className="text-reset fw-bold">Copyright© 2023 KEN G. Todos los derechos reservados.</a>
  </div>
    </footer>
  );
};

export default Footer;
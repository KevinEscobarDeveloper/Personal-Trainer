import React, { useState } from "react";

export const Header = () => {
  /*State for show the submenu when the pointer is over*/
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  return (
    <header>
      <nav>
        <ul className="dropdown">
          <li>
            <a href="/about">Inicio</a>
          </li>
          <li
            className="dropdown-option"
            /*Events of the li option*/
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <a href="">Acerca de</a>
            {/* this only shows if the state is true */}
            {isServicesOpen && (
              <ul className="dropdown-submenu">
                <a href="">Asesorias</a>
                <a href="">Planes</a>
                <a href="">Entrenamientos</a>
              </ul>
            )}
          </li>
          <li>
            <a href="/plans">Planes</a>
          </li>
          <li>
            <a href="/about-me">Conóceme</a>
          </li>
          <li>
            <a href="/test">Test</a>
          </li>
          <li>
            <a href="/login">Ingresar</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

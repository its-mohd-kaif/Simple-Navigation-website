import React from "react";
import "./Nav.css";
import logo from "./logo.png";

function Nav() {
  return (
    <div>
      <ul className="ul1">
        <li className="li1 lileft">
          <a className="a1" href="/">
            <img src={logo} alt="" />
          </a>
        </li>
        <li className="li1 liright lirightMar">
          <a className="a1" href="contact">
            CONTACT US
          </a>
        </li>
        <li className="li1 liright">
          <div class="dropdown">
            <button class="dropbtn">
              OUR PRODUCTS
              <i class="fa fa-caret-down"></i>
            </button>
            <div class="dropdown-content">
              <a className="a1" href="link1">
                Link 1
              </a>
              <a className="a1" href="link2">
                Link 2
              </a>
              <a className="a1" href="link3">
                Link 3
              </a>
            </div>
          </div>
        </li>
        <li className="li1 liright ">
          <a className="a1" href="/">
            HOME
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;

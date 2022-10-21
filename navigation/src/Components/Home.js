import React from "react";
import "./Home.css";
import ig from "../ig.png";
import fb from "../fb.png";
import wall from "../wallpaper.png";
function Home() {
  return (
    <div>
      <ul>
        <li>
          <a
            class="active"
            target={"_blank"}
            href="https://www.instagram.com/"
            rel="noreferrer"
          >
            <img className="logo" src={ig} alt="ig" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target={"_blank"}
            rel="noreferrer"
          >
            <img className="logo" src={fb} alt="fb" />
          </a>
        </li>
      </ul>
      <div className="homeDiv">
        <img className="wall" src={wall} alt="" />
      </div>
    </div>
  );
}

export default Home;

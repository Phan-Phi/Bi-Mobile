import React from "react";

export default function HeroBanner() {
  return (
    <div className="HeroBanner">
      <ul className="HeroBanner__content">
        <li className="HeroBanner__content--item">
          <a href="#" className="HeroBanner--img">
            <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_6.jpg?1641743872117" />
          </a>
        </li>
        <li className="HeroBanner__content--item">
          <a href="#" className="HeroBanner--img">
            <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_7.jpg?1641743872117" />
          </a>
        </li>
        <li className="HeroBanner__content--item">
          <a href="#" className="HeroBanner--img">
            <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_8.jpg?1641743872117" />
          </a>
        </li>
      </ul>
    </div>
  );
}

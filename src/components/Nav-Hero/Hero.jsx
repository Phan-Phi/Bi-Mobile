import React from "react";
import Slider from "react-slick";

export default function Hero() {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="Hero">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_1.jpg?1641835087824"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_5.jpg?1641835087824"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_3.jpg?1641835087824"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_4.jpg?1641835087824"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/slider_5.jpg?1641835087824"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to={0}
            className="acarousel-item ctive"
          >
            <p>Rinh ngay iPhone 13 chỉ từ 1.900.000đ</p>
          </li>
          <li
            className="acarousel-item"
            data-target="#carouselExampleIndicators"
            data-slide-to={1}
          >
            <p>Lên đời dế yêu không lo về giá</p>
          </li>
          <li
            className="acarousel-item"
            data-target="#carouselExampleIndicators"
            data-slide-to={2}
          >
            <p>Giảm sâu toàn shop ưu đãi liền tay</p>
          </li>
          <li
            className="acarousel-item"
            data-target="#carouselExampleIndicators"
            data-slide-to={3}
          >
            <p>Sắm iPhone 12 giảm đến 3 triệu</p>
          </li>
          <li
            className="acarousel-item"
            data-target="#carouselExampleIndicators"
            data-slide-to={4}
          >
            <p>Appple Wacth S6 Trợ giá 1.5 triệu</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

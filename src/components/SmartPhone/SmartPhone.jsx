import React, { Fragment } from "react";
import "../../styles/SmartPhone.style.scss";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

export default function SmartPhone(props) {
  //gọi API iphone chính hãng
  const iPhoneReal = useSelector(
    (state) => state.ListMobileReducer.listMobile[9]
  );
  const samSungReal = useSelector(
    (state) => state.ListMobileReducer.listMobile[10]
  );
  // console.log("iPhoneReal", iPhoneReal.danhSachSP[0].chiTiet);

  const renderiPhoneReal = () => {
    return iPhoneReal.danhSachSP.map((sp, index) => {
      return (
        <div key={index}>
          <a to={`/product/${sp.chiTiet.id}`}>
            <div className="products-item ">
              <NavLink
                to={`/product/${sp.chiTiet.id}`}
                className="products-item-img"
              >
                <img src={sp.chiTiet.hinhSP[0].img} />
              </NavLink>
              <NavLink
                to={`/product/${sp.chiTiet.id}`}
                className="products-item-text"
              >
                <p>
                  {sp.chiTiet.tenSP.length > 35
                    ? sp.chiTiet.tenSP.substr(0, 35) + "..."
                    : sp.chiTiet.tenSP}
                </p>
                <span>{sp.chiTiet.giaSP}</span>
              </NavLink>
              <div className="products-item-button">
                <NavLink to={`/product/${sp.chiTiet.id}`} className="chiTiet">
                  Chi tiết
                </NavLink>
                <button className="yeuThich">Yêu thích</button>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  const rendersamSungReal = () => {
    return samSungReal.danhSachSP.map((sp, index) => {
      return (
        <div key={index}>
          <a>
            <div className="products-item ">
              <NavLink
                to={`/product/${sp.chiTiet.id}`}
                className="products-item-img"
              >
                <img src={sp.chiTiet.hinhSP[0].img} />
              </NavLink>
              <NavLink
                to={`/product/${sp.chiTiet.id}`}
                className="products-item-text"
              >
                <p>
                  {sp.chiTiet.tenSP.length > 35
                    ? sp.chiTiet.tenSP.substr(0, 35) + "..."
                    : sp.chiTiet.tenSP}
                </p>
                <span>{sp.chiTiet.giaSP}</span>
              </NavLink>
              <div className="products-item-button">
                <NavLink to={`/product/${sp.chiTiet.id}`} className="chiTiet">
                  Chi tiết
                </NavLink>
                <button className="yeuThich">Yêu thích</button>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  //\///Biến của slick
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <i
        className="fas fa-chevron-left"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ></i>
    );
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <i
        className="fas fa-chevron-right"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ></i>
    );
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Fragment>
      {/* iPhone chính hãng mới 100% LLA | VNA */}
      <section className="SmartPhone">
        <div className="SmartPhone__content">
          <div className="SmartPhone__title">
            <p>
              <NavLink className="conP" to="/detail/1009">
                iPhone chính hãng mới 100% LLA | VNA
              </NavLink>
            </p>
          </div>
          <div className="SmartPhone__carousel">
            <Slider {...settings}>{renderiPhoneReal()}</Slider>
          </div>
        </div>
      </section>

      {/* Samsung Galyxy Z | Note | S */}
      <section className="SmartPhone">
        <div className="SmartPhone__content">
          <div className="SmartPhone__title">
            <p>
              <NavLink className="conP" to="/detail/1010">
                Samsung Galyxy Z | Note | S
              </NavLink>
            </p>
          </div>
          <div className="SmartPhone__carousel">
            <Slider {...settings}>{rendersamSungReal()}</Slider>
          </div>
        </div>
      </section>
    </Fragment>
  );
}

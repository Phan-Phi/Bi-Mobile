import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "../../styles/detail.style.scss";

export default function Detail(props) {
  const keTao = useSelector((state) => state.RenderTongSP.renderTongSP);
  let { id } = props.match.params;
  console.log("detail", id);
  const samSungReal = useSelector(
    (state) => state.ListMobileReducer.listMobile[10]
  );
  const dispatch = useDispatch;
  const action = {
    type: "RENDER TONG SP",
    data: id,
  };
  useEffect(dispatch(action), []);
  // dispatch(action);
  console.log("object", keTao);

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

  const rendersamSungReal = () => {
    return samSungReal.danhSachSP.map((sp, index) => {
      return (
        <div key={index}>
          <a href="">
            <div className="products-item ">
              <div className="products-item-img">
                <img src={sp.chiTiet.hinhSP[0].img} />
              </div>
              <div className="products-item-text">
                <p>
                  {sp.chiTiet.tenSP.length > 35
                    ? sp.chiTiet.tenSP.substr(0, 35) + "..."
                    : sp.chiTiet.tenSP}
                </p>
                <span>{sp.chiTiet.giaSP}</span>
              </div>
              <div className="products-item-button">
                <button className="chiTiet">Chi tiết</button>
                <button className="yeuThich">Yêu thích</button>
              </div>
            </div>
          </a>
        </div>
      );
    });
  };

  //render tong Macbook
  const renderTongMac = () => {
    return samSungReal.danhSachSP.map((sp, index) => {
      return (
        <a href="" key={index}>
          <div className="products-item ">
            <div className="products-item-img">
              <img src={sp.chiTiet.hinhSP[0].img} />
            </div>
            <div className="products-item-text">
              <p>
                {sp.chiTiet.tenSP.length > 35
                  ? sp.chiTiet.tenSP.substr(0, 35) + "..."
                  : sp.chiTiet.tenSP}
              </p>
              <span>{sp.chiTiet.giaSP}</span>
            </div>
            <div className="products-item-button">
              <button className="chiTiet">Chi tiết</button>
              <button className="yeuThich">Yêu thích</button>
            </div>
          </div>
        </a>
      );
    });
  };

  return (
    <main className="mainDetail">
      <div className="Detail">
        <div className="Detail-index">
          <p>
            <a href="/">Trang chủ</a> / <span>iPhone 13 Series</span>
          </p>
        </div>

        <div className="Detail-name">
          <h4>iPhone 13 Series</h4>
        </div>

        <div className="Detail-product">
          <div className="Detail__content">
            <div className="Detail__content-products">
              <div className="products">{renderTongMac()}</div>
            </div>
          </div>
        </div>

        <div className="Detail-daXem">
          <div className="Detail-daXem-title">
            <p>Sản phẩm bạn vừa xem</p>
          </div>
          <div className="Detail__carousel">
            <Slider {...settings}>{rendersamSungReal()}</Slider>
          </div>
        </div>
      </div>
    </main>
  );
}

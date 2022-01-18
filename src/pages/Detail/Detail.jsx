import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import "../../styles/detail.style.scss";

export default function Detail(props) {
  const renderData = useSelector((state) => state.RenderTongSP.renderData);
  const { id } = props.match.params;
  const samSungReal = useSelector(
    (state) => state.ListMobileReducer.listMobile[10]
  );
  const dispatch = useDispatch();
  const action = {
    type: "RENDER_TONG_SP",
    data: id,
  };
  useEffect(() => {
    dispatch(action);
  }, []);
  console.log("renderData", renderData);
  // console.log("renderTongSP", renderTongSP.danhSachSP);

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
          <NavLink to="#">
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
          </NavLink>
        </div>
      );
    });
  };

  //render tong Macbook
  const renderTongMac = () => {
    return renderData.danhSachSP?.map((sp, index) => {
      return (
        <NavLink to="" key={index}>
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
        </NavLink>
      );
    });
  };

  return (
    <main className="mainDetail">
      <div className="Detail">
        <div className="Detail-index">
          <p>
            <NavLink to="/">Trang chủ</NavLink> /{" "}
            <span>{renderData.mauSP}</span>
          </p>
        </div>

        <div className="Detail-name">
          <h4>{renderData.mauSP}</h4>
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

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
                <span>{sp.chiTiet.giaSP.toLocaleString()}₫</span>
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

  //render tong Macbook
  const renderTongMac = () => {
    return renderData.danhSachSP?.map((sp, index) => {
      return (
        <a key={index}>
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
              <span>{sp.chiTiet.giaSP.toLocaleString()}₫</span>
            </NavLink>
            <div className="products-item-button">
              <NavLink to={`/product/${sp.chiTiet.id}`} className="chiTiet">
                Chi tiết
              </NavLink>
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
            <NavLink to="/">Trang chủ</NavLink> /{" "}
            <span>{renderData.mauSP}</span>
          </p>
        </div>

        <div className="Detail-name">
          <h4>{renderData.mauSP}</h4>
        </div>

        <section className="macbookBanner">
          <div className="macbookBanner__content">
            <div className="content-item">
              <img src="https://cdn.cellphones.com.vn/media/wysiwyg/tet-special-banner_1200x75.gif" />
            </div>
          </div>
        </section>

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

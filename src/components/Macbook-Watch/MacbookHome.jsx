import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles/macbookHome.style.scss";

export default function MacbookHome(props) {
  const arrayTongMac = useSelector(
    (state) => state.TongMacReducer.macbook.tongMac
  );
  const { arrayWatch } = props;
  // console.log("arrayTongSP", arrayWatch[6].danhSachSP);

  const renderTongMac = () => {
    return arrayTongMac.map((sp, index) => {
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
      );
    });
  };

  const renderWatch = () => {
    return arrayWatch[6].danhSachSP.map((sp, index) => {
      return (
        <a to={`/product/${sp.chiTiet.id}`} key={index}>
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
      );
    });
  };

  return (
    <Fragment>
      <section className="macbookBanner">
        <div className="macbookBanner__content">
          <div className="content-item">
            <img src="https://cdn.cellphones.com.vn/media/wysiwyg/tet-special-banner_1200x75.gif" />
          </div>
        </div>
      </section>

      {/* //macbook */}
      <section className="macbook">
        <div className="macbook__content">
          <div className="macbook__content-tieuDe">
            <div>
              <NavLink to="/detail/1001" className="macbook--tieuDe">
                <p>Macbook</p>
              </NavLink>
              <NavLink to="/detail/1002" className="macbook--navLink">
                <p>Macbook Air</p>
              </NavLink>
              <NavLink to="/detail/1001" className="macbook--navLink">
                <p>Macbook Pro</p>
              </NavLink>
              <NavLink to="/detail/1003" className="macbook--navLink">
                <p>iMac</p>
              </NavLink>
              <NavLink to="/detail/1004" className="macbook--navLink">
                <p>Mac Mini</p>
              </NavLink>
              <NavLink to="/detail/1004" className="macbook--navLink active">
                <p>Xem tất cả</p>
              </NavLink>
            </div>
          </div>
          <div className="macbook__content-products">
            <div className="products">{renderTongMac()}</div>
          </div>
        </div>
      </section>

      {/* //watch */}

      <section className="watch">
        <div className="watch__content">
          <div className="watch__content-tieuDe">
            <div>
              <NavLink to="#" className="watch--tieuDe">
                <p>Apple Watch</p>
              </NavLink>
              <NavLink to="/detail/1006" className="watch--navLink active">
                <p>Xem tất cả</p>
              </NavLink>
            </div>
          </div>
          <div className="watch__content-products">
            <div className="products">{renderWatch()}</div>
          </div>
        </div>
      </section>
      <section className="macbookBanner">
        <div className="macbookBanner__content">
          <div className="content-item">
            <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/feature_banner_1.jpg?1641835087824" />
          </div>
          <div className="content-item">
            <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/feature_banner_2.jpg?1641835087824" />
          </div>
        </div>
      </section>
    </Fragment>
  );
}

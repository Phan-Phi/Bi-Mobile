import React, { Fragment } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/amThanhPhuKien.style.scss";
import Product from "../List-Product/Product";

export default function AmThanhPhuKien(props) {
  const { tongAPI } = props;
  console.log("tongAPI", tongAPI);

  const renderTongPK = () => {
    return tongAPI[8].danhSachSP.map((sp, index) => {
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
  const renderTongAirPod = () => {
    return tongAPI[7].danhSachSP.map((sp, index) => {
      return (
        <a href="" key={index}>
          <div className="products-item ">
            <div className="products-item-img">
              <img src={sp.chiTiet.hinhSP[0].img} />
            </div>
            <div className="products-item-text">
              <p>
                {sp.chiTiet.tenSP.length > 40
                  ? sp.chiTiet.tenSP.substr(0, 40) + "..."
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

  const renderProduct2 = () => {
    return tongAPI[8].loaiPK.map((sp, index) => {
      return (
        <a key={index} href="" className="listSP__content">
          <div className="listSP__content--img">
            <img src={sp.imgPK} />
          </div>
          <div className="listSP__content--text">
            <p>{sp.thongtinPK}</p>
          </div>
        </a>
      );
    });
  };
  return (
    <section className="AmThanhPhuKien">
      <div className="AmThanhPhuKien__content">
        <div className="AmThanhPhuKien__content-tieuDe">
          <div>
            <NavLink to="asdasd" className="AmThanhPhuKien--tieuDe">
              <p>âm thanh - phụ kiện</p>
            </NavLink>
          </div>
        </div>

        <div className="listProduct__content">
          <div className="listProduct__content--SP">
            <div className="SP">
              <div className="SP__content">
                <a href="" className="SP__content--NewSP">
                  <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/evo_block_product_banner_3.jpg?1641835087824" />
                </a>
              </div>
              <div className="SP__content">
                <div className="listProduct__content--listSP">
                  {renderProduct2()}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="AmThanhPhuKien__content-products">
          <div className="products">
            {renderTongPK()}
            {renderTongAirPod()}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";

export default function Product(props) {
  const { spAPI } = props;
  return (
    <NavLink to={`/detail/${spAPI.idTong}`} className="listSP__content">
      <div className="listSP__content--img">
        <img src={spAPI.mauIMG} />
      </div>
      <div className="listSP__content--text">
        <p>{spAPI.mauSP}</p>
        <span className="link-text">{spAPI.soluongSP} sản phẩm</span>
      </div>
    </NavLink>
  );
}

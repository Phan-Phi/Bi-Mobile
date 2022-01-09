import React from "react";

export default function Product(props) {
  const { spAPI } = props;
  return (
    <a href="" className="listSP__content">
      <div className="listSP__content--img">
        <img src={spAPI.mauIMG} />
      </div>
      <div className="listSP__content--text">
        <p>{spAPI.mauSP}</p>
        <p className="link-text">{spAPI.soluongSP} sản phẩm</p>
      </div>
    </a>
  );
}

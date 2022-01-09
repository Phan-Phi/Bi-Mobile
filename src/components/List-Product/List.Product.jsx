import React from "react";
import { useSelector } from "react-redux";
import "../../styles/listProduct.scss";
import Product from "./Product";

export default function ListProduct() {
  const listMobileAPI = useSelector(
    (state) => state.ListMobileReducer.listMobile
  );
  console.log("listMobile", listMobileAPI);

  const renderProduct = () => {
    return listMobileAPI.slice(1, 9).map((sp, index) => {
      return <Product key={index} spAPI={sp} />;
    });
  };
  return (
    <section className="listProduct">
      <div className="listProduct__content">
        <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/feature_banner.jpg?1641577866148" />
        <div className="listProduct__content--SP">
          <div className="SP">
            <div className="SP__content shadow">
              <a href="" className="SP__content--NewSP">
                <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/collections/iphone-13-pro-610x527.jpg?v=1633663088113" />
                <p className="link-head">iPhone 13 Series</p>
                <p className="link-text">5 sản phẩm</p>
              </a>
            </div>
            <div className="SP__content">
              <div className="listProduct__content--listSP">
                {renderProduct()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

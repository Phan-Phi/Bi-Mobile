import React from "react";
import "../../styles/listProduct.scss";

export default function ListProduct() {
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
                <a href="" className="listSP__content">
                  <div className="listSP__content--img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/collections/macbook-pro-m1-myd82-maconline.jpg?v=1640088346320" />
                  </div>
                  <div className="listSP__content--text">
                    <p>Macbook Pro</p>
                    <p className="link-text">24 sản phẩm</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

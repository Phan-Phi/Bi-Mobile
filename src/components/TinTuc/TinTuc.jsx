import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/tinTuc.style.scss";

export default function TinTuc() {
  return (
    <section className="TinTuc">
      <div className="TinTuc__content">
        <div className="TinTuc__content-tieuDe">
          <div>
            <NavLink to="asdasd" className="tieuDe--navLink">
              <p>24h Công Nghệ</p>
            </NavLink>
          </div>
        </div>

        <div className="TinTuc__content-product">
          <div className="product">
            <div className="product__right">
              <a href="#">
                <div className="product__img">
                  <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/articles/thong-tin-ios-16-4.jpg?v=1641889348797" />
                </div>
                <div className="product__text">
                  <p>
                    iOS 16 sẽ có gì mới? Ngày phát hành và danh sách iPhone được
                    cập nhật
                  </p>
                  <span>11/01/2022</span>
                </div>
              </a>
            </div>
            <div className="product__left">
              <a href="">
                <div className="product__left--content">
                  <div className="content-img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/articles/smartwatch-01.jpg?v=1641357049380" />
                  </div>
                  <div className="content-text">
                    <p>
                      Tại sao nên chọn smartwatch có mặt vuông thay vì tròn?
                    </p>
                    <span>05/01/2022</span>
                  </div>
                </div>
              </a>

              <a href="">
                <div className="product__left--content">
                  <div className="content-img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/articles/airpods-3-featured-cover.jpg?v=1641186504990" />
                  </div>
                  <div className="content-text">
                    <p>
                      Apple chia sẻ những hạn chế của Bluetooth và bộ tính năng
                      của AirPods 3
                    </p>
                    <span>03/01/2022</span>
                  </div>
                </div>
              </a>

              <a href="">
                <div className="product__left--content">
                  <div className="content-img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/articles/rlklduqnxjkytm9x3xqfc5-970-80-jp.jpg?v=1640752629193" />
                  </div>
                  <div className="content-text">
                    <p>
                      Đánh giá iPhone 13 mini: Lựa chọn tuyệt vời cho những ai
                      thích smartphone nhỏ gọn
                    </p>
                    <span>29/12/2021</span>
                  </div>
                </div>
              </a>

              <a href="">
                <div className="product__left--content">
                  <div className="content-img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/articles/android-vs-iphone-01.jpg?v=1640664128450" />
                  </div>
                  <div className="content-text">
                    <p>
                      Đây là 3 lý do khiến điện thoại Android luôn nhiều RAM hơn
                      iPhone
                    </p>
                    <span>28/12/2021</span>
                  </div>
                </div>
              </a>

              <a href="">
                <div className="product__left--content">
                  <div className="content-img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/articles/loi-may-macbook-pro-2021-1.jpg?v=1640415108110" />
                  </div>
                  <div className="content-text">
                    <p>
                      3 vấn đề đã biết trên dòng MacBook Pro 2021 và cách khắc
                      phục
                    </p>
                    <span>25/12/2021</span>
                  </div>
                </div>
              </a>

              <a href="">
                <div className="product__left--content">
                  <div className="content-img">
                    <img src="https://bizweb.dktcdn.net/thumb/large/100/434/290/articles/1-800x450.jpg?v=1640414826303" />
                  </div>
                  <div className="content-text">
                    <p>
                      Những cách giúp tai nghe AirPods của bạn nghe to rõ hơn
                    </p>
                    <span>25/12/2021</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

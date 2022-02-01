import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";

export default function Header() {
  return (
    <header>
      <section>
        <div className="header">
          <NavLink to="/">
            <img
              src="./img/BiMobile-logo-01.png"
              alt="logo"
              className="header__logo"
            />
          </NavLink>

          <div className="header__input">
            <input type="text" placeholder="Bạn cần tìm gì?" />
            <p>
              <i className="fas fa-search" />
            </p>
          </div>
          <div className="header__footer">
            <div className="header__phone">
              <i className="fas fa-phone-volume" />

              <p>
                Gọi mua hàng:
                <br />
                <span>0398.813.369</span>
              </p>
            </div>
            <div className="header__taiKhoan">
              <p>
                <i className="far fa-user" />
                Tài khoản
                <ul className="taiKhoan">
                  <li>
                    <NavLink className="dangNhap" to="/login">
                      Đăng Nhập
                    </NavLink>
                  </li>
                  <li className="dangKy">
                    <NavLink className="dangKy" to="/sign-up">
                      Đăng Ký
                    </NavLink>
                  </li>
                  <li className="yeuThich">
                    Yêu Thích <span>0</span>
                  </li>
                </ul>
              </p>
            </div>
            <div className="header__gioHang">
              <p>
                <i className="fas fa-shopping-cart" />
                Giỏ hàng
              </p>
              <div>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

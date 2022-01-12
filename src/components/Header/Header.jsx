import React from "react";
import "../../styles/header.scss";

export default function Header() {
  return (
    <header>
      <section>
        <div className="header">
          <a href="/">
            <img
              src="./img/BiMobile-logo-01.png"
              alt="logo"
              className="header__logo"
            />
          </a>

          <div className="header__input">
            <input type="text" placeholder="Bạn cần tìm gì?" />
            <p>
              <i class="fas fa-search"></i>
            </p>
          </div>
          <div className="header__footer">
            <div className="header__phone">
              <i class="fas fa-phone-volume"></i>
              <p>
                Gọi mua hàng:
                <br />
                <span>0398.813.369</span>
              </p>
            </div>
            <div className="header__taiKhoan">
              <p>
                <i class="far fa-user"></i>Tài khoản
              </p>
            </div>
            <div className="header__gioHang">
              <p>
                <i class="fas fa-shopping-cart"></i>Giỏ hàng
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

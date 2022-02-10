import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";

export default function Header() {
  const BtnGioHang = () => {
    const Hdisplay = document.querySelector(".headerDisplay");
    const HgioHang = document.querySelector(".headerGioHang");
    Hdisplay.style.display = "block";
    HgioHang.style.transform = "translateX(0%)";
    HgioHang.style.transition = "transform 0.6s";
  };

  const closeDisplay = () => {
    const Hdisplay = document.querySelector(".headerDisplay");
    const HgioHang = document.querySelector(".headerGioHang");
    Hdisplay.style.display = "none";
    HgioHang.style.transform = "translateX(100%)";
    HgioHang.style.transition = "transform 0.6s";
  };

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
            <div onClick={() => BtnGioHang()} className="header__gioHang">
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
      <div onClick={() => closeDisplay()} className="headerDisplay"></div>
      <div className="headerGioHang">
        <div className="headerGioHang_head">
          <p>Giỏ hàng</p>
          <p onClick={() => closeDisplay()}>
            <i class="fas fa-times"></i>
          </p>
        </div>

        <div className="headerGioHang_product"></div>

        <div className="headerGioHang_footer">
          <hr />
          <div className="giaTien">
            <p>Tổng tiền:</p>
            <p className="so">
              30000000<span>₫</span>
            </p>
          </div>
          <div className="thanhToan">
            <button>Thanh Toán</button>
          </div>
        </div>
      </div>
    </header>
  );
}

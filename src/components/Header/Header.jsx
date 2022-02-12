import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";
let menuConNav = true;
let menuChauNavs = true;
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

  const openMenu = () => {
    const Hdisplay = document.querySelector(".headerDisplay");
    Hdisplay.style.display = "block";
  };

  const openMenuNavBar = () => {
    const menuCon = document.querySelector(".menu-con");
    const menuIcon = document.querySelector(".menu-icon");

    if (menuConNav) {
      menuIcon.innerHTML = `<i class="fas fa-angle-down"></i>`;
      menuCon.style.display = "block";
      menuCon.style.transition = "display 0.5s";
      menuConNav = false;
    } else {
      menuIcon.innerHTML = `<i class="fas fa-angle-up"></i>`;
      menuCon.style.display = "none";
      menuCon.style.transition = "display 0.5s";
      menuConNav = true;
    }
  };

  const openMenuNavBarChau = () => {
    const menuChau = document.querySelector(".menu-chau");
    const menuChauIcon = document.querySelector(".menuChau-icon");
    console.log("first");
    if (menuChauNavs) {
      console.log("first222");
      menuChauIcon.innerHTML = `<i class="fas fa-angle-down"></i>`;
      menuChau.style.display = "block";
      menuChauNavs = false;
    } else if (menuChauNavs == false) {
      menuChauIcon.innerHTML = `<i class="fas fa-angle-up"></i>`;
      menuChau.style.display = "none";
      menuChauNavs = true;
    }
  };

  return (
    <header>
      <section>
        <div className="header">
          <div className="navBar">
            <i class="fas fa-bars" onClick={() => openMenu()}></i>
          </div>

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
                <i class="fas fa-shopping-bag"></i>
                <span className="textGioHang">Giỏ hàng</span>
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

      <div className="headerNavBar">
        <div className="NavBar-Login">
          <p className="iconUser">
            <i class="far fa-user"></i>
          </p>
          <div className="iconText">
            <p>
              <NavLink to="#" class="login">
                Đăng Nhập
              </NavLink>
            </p>
            <p>
              <NavLink to="#" class="login">
                Đăng Ký
              </NavLink>
            </p>
          </div>
        </div>
        <div className="NavBar-Menu">
          <ul>
            <li className="menu-content">
              <a>
                <p>Điện thoại</p>
                <p onClick={() => openMenuNavBar()} className="menu-icon">
                  <i class="fas fa-angle-up"></i>
                </p>
              </a>

              <ul className="menu-con">
                <li>
                  <a href="#">
                    <p>Apple</p>
                    <p
                      onClick={() => openMenuNavBarChau()}
                      className="menuChau-icon"
                    >
                      <i class="fas fa-angle-up"></i>
                    </p>
                  </a>
                  <ul className="menu-chau">
                    <li>
                      <a href="">iPhone 12 | 12 Pro | 12 Pro max</a>
                    </li>
                    <li>
                      <a href="">iPhone 11 | 11 Pro | 11 Pro max</a>
                    </li>
                    <li>
                      <a href="">iPhone Xs | Xs max</a>
                    </li>
                    <li>
                      <a href="">iPhone X | Xr</a>
                    </li>
                    <li>
                      <a href="">iPhone 8 | 8 Plus</a>
                    </li>
                    <li>
                      <a href="">iPhone 7 | 7 Plus</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <p>SamSung</p>
                    <p
                      onClick={() => openMenuNavBarChau()}
                      className="menuChau-icon"
                    >
                      <i class="fas fa-angle-up"></i>
                    </p>
                  </a>
                  <ul className="menu-chau">
                    <li>
                      <a href="">Galaxy Z Fold3 | Z Flip3 5G</a>
                    </li>
                    <li>
                      <a href="">Galaxy S21 | S21 Plus | S21 Ultra</a>
                    </li>
                    <li>
                      <a href="">Galaxy Note 20 | Note 20 Ultra 5G</a>
                    </li>
                    <li>
                      <a href="">Galaxy Note 10 | Note 10 Plus</a>
                    </li>
                    <li>
                      <a href="">Galaxy S10e | S10 | S10 5G</a>
                    </li>
                    <li>
                      <a href="">Galaxy A Series</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="menu-content">
              <a>
                <p>Dịch vụ sửa chữa</p>
              </a>
            </li>
            <li className="menu-content">
              <a>
                <p>
                  Sản phẩm yêu thích (<span>0</span>)
                </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

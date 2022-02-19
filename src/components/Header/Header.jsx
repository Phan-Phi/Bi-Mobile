import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import "../../styles/header.scss";
let menuConNav = true;
let menuChauNavs = true;
export default function Header() {
  const [count, setCount] = useState(0);
  const gioHang = useSelector((state) => state.GioHangReducer.GioHang);
  const dispatch = useDispatch();
  console.log("gioHang", gioHang);

  //tinh tong gia cac san pham da chon
  const tongTien = () => {
    const sotien = (accumulator, currentValue) => {
      return accumulator + currentValue.giaSP;
    };
    let total = gioHang.reduce(sotien, 0);

    return total;
  };

  //render gio hang
  const GioHangSP = (ghgh) => {
    return ghgh.map((gh, index) => {
      console.log("render lai");
      return (
        <div key={index} className="product_content">
          <div className="product_img">
            <img src={gh.hinhSP[0].img} alt="" />
          </div>
          <div className="product_text">
            <p>{gh.tenSP}</p>
            <div className="soluong_gia">
              <div className="soluong">
                <p>Số lượng:</p>
                <p className="soluong_so">
                  <span className="soluong_tru">-</span>1
                  <span className="soluong_cong">+</span>
                </p>
              </div>
              <div className="gia">
                <p className="gia_gia">{gh.giaSP.toLocaleString()}₫</p>
                <p onClick={() => handleBoSanPham(gh.id)} className="gia_bo">
                  Bỏ sản phẩm
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  //nut bo san pham da chon
  const handleBoSanPham = (gh) => {
    const action3 = {
      type: "BO_SAN_PHAM",
      data: gh,
    };
    dispatch(action3);
    setCount(count + 1);
    GioHangSP(gioHang);
  };

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
    const headerNavBar = document.querySelector(".headerNavBar");
    Hdisplay.style.display = "none";
    HgioHang.style.transform = "translateX(100%)";
    HgioHang.style.transition = "transform 0.6s";
    headerNavBar.style.transform = "translateX(-100%)";
  };

  const openMenu = () => {
    const Hdisplay = document.querySelector(".headerDisplay");
    const headerNavBar = document.querySelector(".headerNavBar");
    Hdisplay.style.display = "block";
    headerNavBar.style.transform = "translateX(0%)";
  };

  //Dóng mở tag con bên trong Menu Bar
  const openMenuNavBar = (id) => {
    const menuCon = document.getElementsByClassName("menu-con")[id];
    const menuIcon = document.getElementsByClassName("menu-icon")[id];

    if (menuConNav) {
      menuIcon.innerHTML = `<i class="fas fa-minus"></i>`;
      menuCon.setAttribute("style", "display: block");
      menuConNav = false;
    } else {
      menuIcon.innerHTML = `<i class="fas fa-plus"></i>`;
      menuCon.setAttribute("style", "display: none");
      menuConNav = true;
    }
  };
  const openMenuNavBarChau = (id) => {
    const menuChau = document.getElementsByClassName("menu-chau")[id];
    const menuChauIcon = document.getElementsByClassName("menuChau-icon")[id];
    if (menuChauNavs) {
      menuChauIcon.innerHTML = `<i class="fas fa-minus"></i>`;
      menuChau.setAttribute("style", "display: block");
      menuChauNavs = false;
    } else {
      menuChauIcon.innerHTML = `<i class="fas fa-plus"></i>`;
      menuChau.setAttribute("style", "display: none");
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

        <div className="headerGioHang_product">{GioHangSP(gioHang)}</div>

        <div className="headerGioHang_footer">
          <hr />
          <div className="giaTien">
            <p>Tổng tiền:</p>
            <p className="so">{tongTien().toLocaleString()}₫</p>
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
                <p
                  onClick={() => openMenuNavBar(0)}
                  className="menu-icon"
                  style={{ display: "block" }}
                >
                  <i class="fas fa-plus"></i>
                </p>
              </a>

              <ul className="menu-con">
                <li>
                  <a href="#">
                    <p>Apple</p>
                    <p
                      onClick={() => openMenuNavBarChau(0)}
                      className="menuChau-icon"
                    >
                      <i class="fas fa-plus"></i>
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
                      onClick={() => openMenuNavBarChau(1)}
                      className="menuChau-icon"
                    >
                      <i class="fas fa-plus"></i>
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
                <p>Laptop</p>
                <p onClick={() => openMenuNavBar(1)} className="menu-icon">
                  <i class="fas fa-plus"></i>
                </p>
              </a>

              <ul className="menu-con">
                <li>
                  <a href="#">
                    <p>Mac</p>
                    <p
                      onClick={() => openMenuNavBarChau(2)}
                      className="menuChau-icon"
                    >
                      <i class="fas fa-plus"></i>
                    </p>
                  </a>
                  <ul className="menu-chau">
                    <li>
                      <a href="">Macbook Air</a>
                    </li>
                    <li>
                      <a href="">Macbook Pro</a>
                    </li>
                    <li>
                      <a href="">iMac</a>
                    </li>
                    <li>
                      <a href="">Mac Mini</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <p>Laptop Dell</p>
                  </a>
                  <a href="#">
                    <p>Laptop Asus</p>
                  </a>
                  <a href="#">
                    <p>Laptop Acer</p>
                  </a>
                  <a href="#">
                    <p>Laptop Lenovo</p>
                  </a>
                  <a href="#">
                    <p>Laptop MSI</p>
                  </a>
                  <a href="#">
                    <p>Laptop HP</p>
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-content">
              <a>
                <p>iPad</p>
                <p onClick={() => openMenuNavBar(2)} className="menu-icon">
                  <i class="fas fa-plus"></i>
                </p>
              </a>

              <ul className="menu-con">
                <li>
                  <a href="#">
                    <p>iPad Generation</p>
                  </a>
                  <a href="#">
                    <p>iPad Mini</p>
                  </a>
                  <a href="#">
                    <p>iPad Mini</p>
                  </a>
                  <a href="#">
                    <p>iPad Air</p>
                  </a>
                  <a href="#">
                    <p>iPad Pro</p>
                  </a>
                </li>
              </ul>
            </li>

            <li className="menu-content">
              <a>
                <p>Phụ kiện</p>
                <p onClick={() => openMenuNavBar(3)} className="menu-icon">
                  <i class="fas fa-plus"></i>
                </p>
              </a>

              <ul className="menu-con">
                <li>
                  <a href="#">
                    <p>Phụ kiện Apple</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Phụ kiện Mac</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Pin sạc dự phòng</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Dây cáp sạc</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <p>Apdapter củ sạc</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <p>Cường lực ốp lưng</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <p>Đồ chơi công nghệ</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <p>Balo, túi xách, ví</p>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <p>Thương hiệu nổi bật </p>
                    <p
                      onClick={() => openMenuNavBarChau(3)}
                      className="menuChau-icon"
                    >
                      <i class="fas fa-plus"></i>
                    </p>
                  </a>
                  <ul className="menu-chau">
                    <li>
                      <a href="">Apple Accsessories</a>
                    </li>
                    <li>
                      <a href="">ITSKIN France</a>
                    </li>
                    <li>
                      <a href="">Tomtoc</a>
                    </li>
                    <li>
                      <a href="">MiPow USA</a>
                    </li>
                    <li>
                      <a href="">Innostye</a>
                    </li>
                    <li>
                      <a href="">Rain Design</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className="menu-content">
              <a>
                <p>Apple Watch</p>
              </a>
            </li>

            <li className="menu-content">
              <a>
                <p>Phụ kiện</p>
                <p onClick={() => openMenuNavBar(4)} className="menu-icon">
                  <i class="fas fa-plus"></i>
                </p>
              </a>

              <ul className="menu-con">
                <li>
                  <a href="#">
                    <p>Apple</p>
                    <p
                      onClick={() => openMenuNavBarChau(4)}
                      className="menuChau-icon"
                    >
                      <i class="fas fa-plus"></i>
                    </p>
                  </a>
                  <ul className="menu-chau">
                    <li>
                      <a href="">AirPods 2</a>
                    </li>
                    <li>
                      <a href="">AirPods Pro</a>
                    </li>
                    <li>
                      <a href="">AirPods Promax</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <p>Marshall</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Bose</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Bang & Olufsen</p>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <p>Beats Audio</p>
                  </a>
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

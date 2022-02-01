import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/dangNhap.style.scss";

export default function DangNhap() {
  return (
    <main className="mainLogin">
      <div className="Login">
        <div className="Login-index">
          <p>
            <NavLink to="/">Trang chủ</NavLink> /{" "}
            <span>Đăng nhập tài khoản</span>
          </p>
        </div>

        <div className="Login-content">
          <div className="Login-img">
            <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/account-banner.jpg?1643343111446" />
            <div className="Login-img-text">
              <h5>Quyền lợi thành viên</h5>
              <p>
                <i class="far fa-check-circle"></i> Mua hàng khắp thế giới cực
                dễ dàng, nhanh chóng
              </p>
              <p>
                <i class="far fa-check-circle"></i> Theo dõi chi tiết đơn hàng,
                địa chỉ thanh toán dễ dàng
              </p>
              <p>
                <i class="far fa-check-circle"></i> Theo dõi chi tiết đơn hàng,
                địa chỉ thanh toán dễ dàng
              </p>
            </div>
          </div>

          <div className="Login-input">
            <div className="dangnhap-dangky">
              <div className="dangnhap">
                <NavLink className="dangNhap" to="/login">
                  Đăng Nhập
                </NavLink>
              </div>
              <div className="dangky">
                <NavLink className="dangKy" to="/sign-up">
                  Đăng Ký
                </NavLink>
              </div>
            </div>
            <div className="input">
              <div className="email">
                <p>Email:</p>
                <input type="text" placeholder="Nhập địa chỉ email" />
              </div>

              <div className="matKhau">
                <p>Mật Khẩu:</p>
                <input type="text" placeholder="Nhập mật khẩu" />
              </div>
              <p className="quenPass">
                <a className="quenPass" href="">
                  Quên mật khẩu?
                </a>
              </p>
              <button>Đăng Nhập</button>
              <p>
                BiMobile cam kết bảo mật và sẽ không bao giờ đăng hay chia sẻ
                thông tin mà chưa có được sự đồng ý của bạn.
              </p>
              <p className="changeLogin">
                <span>hoặc đăng nhập qua</span>
              </p>
              <div className="face-google">
                <div className="facebook">
                  <i class="fab fa-facebook-f"></i> Facebook
                </div>
                <div className="google">
                  <i class="fab fa-google"></i> Google
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import "../../styles/dangKy.scss";
export default function DangKy() {
  return (
    <main className="mainSignUp">
      <div className="SignUp">
        <div className="SignUp-index">
          <p>
            <NavLink to="/">Trang chủ</NavLink> / <span>Đăng ký tài khoản</span>
          </p>
        </div>

        <div className="SignUp-content">
          <div className="SignUp-img">
            <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/account-banner.jpg?1643343111446" />
            <div className="SignUp-img-text">
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

          <div className="SignUp-input">
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
                <p>Họ:</p>
                <input type="text" placeholder="Nhập địa chỉ email" />
              </div>

              <div className="matKhau">
                <p>tên:</p>
                <input type="text" placeholder="Nhập mật khẩu" />
              </div>

              <div className="matKhau">
                <p>SỐ ĐIỆN THOẠI:</p>
                <input type="text" placeholder="Nhập mật khẩu" />
              </div>

              <div className="matKhau">
                <p>EMAIL:</p>
                <input type="text" placeholder="Nhập mật khẩu" />
              </div>

              <div className="matKhau">
                <p>MẬT KHẨU:</p>
                <input type="text" placeholder="Nhập mật khẩu" />
              </div>

              <button>Đăng Ký</button>

              <p className="changeSignUp">
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

import React from "react";
import "../../styles/footer.scss";

export default function Footer() {
  return (
    <footer>
      <section className="footer__top">
        <div className="footer__content">
          <p className="footer__title">Apple AAR : Mimall Vietnam</p>
          <p className="footer__text">
            MST: 41N8046448 do UBND quận Tân Bình cấp ngày 16/6/2020
          </p>
          <p className="footer__text">
            Địa chỉ: (CN1) 1007/33 Lạc Long Quân, Phường 11, Quận Tân Bình, TP
            HCM (CN2) (Sớm Khai Trương)
          </p>
          <p className="footer__text">
            Điện thoại: <a href="#">0398.813.369</a>
          </p>
          <p className="footer__text">Email: phananhphi.web@gmail.com</p>
          <p className="footer__title">Hỗ trợ thanh toán</p>
          <div className="footer__bank">
            <div className="footer__bank-item">
              <img
                src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/payment_2.svg?1641577866148"
                alt=""
              />
            </div>
            <div className="footer__bank-item">
              <img
                src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/payment_1.svg?1641577866148"
                alt=""
              />
            </div>
            <div className="footer__bank-item">
              <img
                src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/payment_3.svg?1641577866148"
                alt=""
              />
            </div>
            <div className="footer__bank-item">
              <img
                src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/payment_4.svg?1641577866148"
                alt=""
              />
            </div>
            <div className="footer__bank-item">
              <img
                src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/payment_5.svg?1641577866148"
                alt=""
              />
            </div>
            <div className="footer__bank-item">
              <img
                src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/payment_6.svg?1641577866148"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="footer__content">
          <p className="footer__title">Thông tin khác</p>
          <p className="footer__text">
            <a href="/">Trang chủ</a>
          </p>
          <p className="footer__text">
            <a href="/">Giới thiệu</a>
          </p>
          <p className="footer__text">
            <a href="/">Sản phẩm</a>
          </p>
          <p className="footer__text">
            <a href="/">Chính sách bảo hành</a>
          </p>
          <p className="footer__text">
            <a href="/">Trade-in Thu Cũ Đổi Mới</a>
          </p>
          <p className="footer__text">
            <a href="/">Tuyển dụng</a>
          </p>
          <img src="	https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/bct.png?1641577866148" />
        </div>
        <div className="footer__content">
          <p className="footer__title">Chính sách</p>
          <p className="footer__text">
            <a href="/">Chính sách bảo mật</a>
          </p>
          <p className="footer__text">
            <a href="/">Chính sách vận chuyển</a>
          </p>
          <p className="footer__text">
            <a href="/">Chính sách đổi trả</a>
          </p>
          <p className="footer__text">
            <a href="/">Chính sách thanh toán</a>
          </p>
          <p className="footer__text">
            <a href="/">Chính sách bảo hành</a>
          </p>
          <p className="footer__text">
            <a href="/">Mimall Premises Services</a>
          </p>
        </div>
        <div className="footer__content">
          <p className="footer__title">Gọi tư vấn & khiếu nại</p>
          <p className="footer__text">
            Gọi mua hàng:{" "}
            <a className="footer__text-phone" href="#">
              0398.813.369
            </a>{" "}
            (8h00 - 22h00)
          </p>
          <p className="footer__text">
            Gọi khiếu nại:{" "}
            <a className="footer__text-phone" href="#">
              0398.813.369
            </a>{" "}
            (8h00 - 21h00)
          </p>
          <p className="footer__text">
            Gọi bảo hành:{" "}
            <a className="footer__text-phone" href="#">
              0398.813.369
            </a>{" "}
            (8h00 - 22h30)
          </p>
          <p className="footer__title">Kết nối với chúng tôi</p>
          <div className="footer__bank">
            <div className="footer__bank-item">
              <a href="https://github.com/Phan-Phi" target="_blank">
                <i className="fab fa-facebook-f" />
              </a>
            </div>
            <div className="footer__bank-item">
              <a href="https://github.com/Phan-Phi" target="_blank">
                <i className="fab fa-twitter" />
              </a>
            </div>
            <div className="footer__bank-item">
              <a href="https://github.com/Phan-Phi" target="_blank">
                <i className="fab fa-youtube" />
              </a>
            </div>
            <div className="footer__bank-item">
              <a href="https://github.com/Phan-Phi" target="_blank">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="footer__bottom">
        <p>© Bản quyền thuộc về Phan Anh Phi</p>
      </section>
    </footer>
  );
}

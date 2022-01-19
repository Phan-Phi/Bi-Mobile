import React from "react";
import "../../styles/chiTiet.style.scss";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export default function ChiTiet() {
  return (
    <main className="mainChiTiet">
      <div className="ChiTiet">
        <div className="ChiTiet-index">
          <p>
            <NavLink to="/">Trang chủ</NavLink> / <span>asdasdas</span>
          </p>
        </div>

        <div className="ChiTiet-content">
          <div className="ChiTiet-name">
            <h3>Apple MacBook Air 13 inch 128GB MQD32 I Chính hãng Apple</h3>
          </div>

          <div className="ChiTiet-product">
            <div className="ChiTiet-img">sd</div>

            <div className="ChiTiet-info">
              <div className="ChiTiet-info-thongtin">
                <p>
                  Thương hiệu: <span>Mimall Vietnam</span>
                </p>
                <p>
                  Mã sản phẩm: <span>(Đang cập nhật...)</span>
                </p>
                <p className="gia">
                  Giá: <span>19.500.000₫</span>
                </p>
                <p>Dung lượng:</p>
                <ul className="dungluong">
                  <li className="active">256GB</li>
                  <li>512GB</li>
                </ul>
              </div>

              <div className="ChiTiet-info-btn">
                <div className="ChiTiet-mua">
                  <p className="ChiTiet-muangay">mua ngay</p>
                  <p className="ChiTiet-giao">
                    Giao tận nơi hoặc nhận tại cửa hàng
                  </p>
                </div>
                <div className="ChiTiet-tuychon">
                  <div className="ChiTiet-yeuthich">Yêu thích</div>
                  <div className="ChiTiet-tragop">Trả góp</div>
                  <div className="ChiTiet-sosanh">
                    <i class="fas fa-exchange-alt"></i>
                  </div>
                </div>
              </div>

              <div className="ChiTiet-info-chinhsach">
                <p className="chinhsach-1">
                  Gọi <span>0398.813.369</span> để tư vấn mua hàng
                </p>
                <p className="chinhsach-2">
                  Trợ giá 500K khi <NavLink to="">THU CŨ ĐỔI MỚI</NavLink> tại
                  BiMobile
                </p>
                <img src="https://antien.vn/assets/images/camket.jpg" alt="" />
              </div>
            </div>

            <div className="ChiTiet-quangcao">aaa</div>
          </div>
        </div>
      </div>
    </main>
  );
}

import React from "react";
import "../../styles/chiTiet.style.scss";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";

export default function ChiTiet() {
  const samSungReal = useSelector(
    (state) => state.ListMobileReducer.listMobile[10]
  );
  //render bạn đã xem
  const rendersamSungReal = () => {
    return samSungReal.danhSachSP.map((sp, index) => {
      return (
        <div key={index}>
          <NavLink to="#">
            <div className="products-item ">
              <div className="products-item-img">
                <img src={sp.chiTiet.hinhSP[0].img} />
              </div>
              <div className="products-item-text">
                <p>
                  {sp.chiTiet.tenSP.length > 35
                    ? sp.chiTiet.tenSP.substr(0, 35) + "..."
                    : sp.chiTiet.tenSP}
                </p>
                <span>{sp.chiTiet.giaSP}</span>
              </div>
              <div className="products-item-button">
                <button className="chiTiet">Chi tiết</button>
                <button className="yeuThich">Yêu thích</button>
              </div>
            </div>
          </NavLink>
        </div>
      );
    });
  };
  //\///Biến của slick
  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <i
        className="fas fa-chevron-left"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ></i>
    );
  };
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <i
        className="fas fa-chevron-right"
        style={{ ...style, display: "block" }}
        onClick={onClick}
      ></i>
    );
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
                <p className="gia">19.500.000₫</p>
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

            <div className="ChiTiet-quangcao">
              <div className="quangcao-content">
                <div className="quangcao-img">
                  <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/product_main_policy_1_img.jpg?1642391593337" />
                </div>
                <div className="quangcao-title">
                  <h6>Mua kèm COMBO giảm 40%</h6>
                  <p>
                    Sạc Dự Phòng Pin dự phòng Innostyle Powergo Smart AI
                    10000mAh - Chính Hãng Chỉ với 299.000đ
                  </p>
                </div>
              </div>
              <div className="quangcao-content">
                <div className="quangcao-img">
                  <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/product_main_policy_2_img.jpg?1642391593337" />
                </div>
                <div className="quangcao-title">
                  <h6>Apple Watch Series 3 38MM GPS VN/A</h6>
                  <p>
                    Giá gốc 5.300.000đ <br /> Chỉ còn 4.499.000đ
                  </p>
                </div>
              </div>
              <div className="quangcao-content">
                <div className="quangcao-img">
                  <img src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/product_main_policy_2_img.jpg?1642391593337" />
                </div>
                <div className="quangcao-title">
                  <h6>Apple Watch Series 3 38MM GPS VN/A</h6>
                  <p>
                    Giá gốc 5.300.000đ <br /> Chỉ còn 4.499.000đ
                  </p>
                </div>
              </div>
              <img src="https://cdn.cellphones.com.vn/media/wysiwyg/tet-400x100.gif"></img>
            </div>
          </div>
        </div>
        <div className="ChiTiet-daXem">
          <div className="ChiTiet-daXem-title">
            <p>Sản phẩm bạn vừa xem</p>
          </div>
          <div className="ChiTiet__carousel">
            <Slider {...settings}>{rendersamSungReal()}</Slider>
          </div>
        </div>
      </div>
    </main>
  );
}

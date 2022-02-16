import React, { useEffect, useState } from "react";
import "../../styles/chiTiet.style.scss";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import ChiTietBaiViet from "./ChiTietBaiViet";
import { useDispatch } from "react-redux";

export default function ChiTiet(props) {
  const renderProduct = useSelector(
    (state) => state.RenderProducts.renderProduct
  );
  const { id } = props.match.params;
  const dispatch = useDispatch();
  const action = {
    type: "RENDER_THONG_TIN_SP",
    data: id,
  };
  useEffect(() => {
    dispatch(action);
  }, []);
  // console.log("renderProduct", renderProduct[0].chiTiet);

  let [BtnValue, setBtnValue] = useState(true);
  const samSungReal = useSelector(
    (state) => state.ListMobileReducer.listMobile[10]
  );

  //render gio hang khi click mua hang
  const renderGioHang = () => {
    const idAction = renderProduct[0].chiTiet;
    const action2 = {
      type: "RENDER_GIO_HANG",
      data: idAction,
    };
    dispatch(action2);
  };

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

  //\///Biến của slick chuyen anh
  const settings1 = {
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        className="dots"
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul className="dots-icon" style={{ margin: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        className="dots-item"
        style={{
          width: "30px",
        }}
      >
        <img src={renderProduct[0].chiTiet.hinhSP[0 + i].img} />
      </div>
    ),
  };

  //function btn xem thêm
  const BtnXemThem = () => {
    let btn = document.querySelector(".thongSo_Btn");
    let baiViet = document.querySelector(".thongSo_baiViet");
    if (BtnValue) {
      btn.innerHTML = "Rút gọn";
      baiViet.style.display = "block";
      setBtnValue((BtnValue = false));
    } else if (BtnValue == false) {
      setBtnValue((BtnValue = true));
      btn.innerHTML = "Xem thêm";
      baiViet.style.display = "none";
    }
  };

  //render Hinh SP
  const renderHinhSP = () => {
    return renderProduct[0].chiTiet.hinhSP.map((img, index) => {
      return (
        <div key={index}>
          <img src={img.img} />
        </div>
      );
    });
  };

  //render màu sắc
  const renderColor = () => {
    return renderProduct[0].chiTiet.mauSac.map((color, index) => {
      return (
        <li style={{ backgroundColor: `${color.mauSP}` }} key={index}></li>
      );
    });
  };

  return (
    <main className="mainChiTiet">
      <div className="ChiTiet">
        <div className="ChiTiet-index">
          <p>
            <NavLink to="/">Trang chủ</NavLink> /{" "}
            <span>{renderProduct[0].chiTiet.tenSP}</span>
          </p>
        </div>

        <div className="ChiTiet-content">
          <div className="ChiTiet-name">
            <h3>{renderProduct[0].chiTiet.tenSP}</h3>
          </div>

          <div className="ChiTiet-product">
            {/* slick chuyen anh */}
            <div className="ChiTiet-img">
              <Slider {...settings1}>{renderHinhSP()}</Slider>
            </div>

            {/* */}
            <div className="ChiTiet-info">
              <div className="ChiTiet-info-thongtin">
                <p>
                  Thương hiệu:{" "}
                  <span>{renderProduct[0].chiTiet.thuongHieu}</span>
                </p>
                <p>
                  Mã sản phẩm: <span>(Đang cập nhật...)</span>
                </p>
                <p className="gia">
                  {renderProduct[0].chiTiet.giaSP.toLocaleString()}₫
                </p>
                <p>Màu sắc:</p>
                <ul className="mau">{renderColor()}</ul>
                <p>Dung lượng:</p>
                <ul className="dungluong">
                  <li className="active">256GB</li>
                  <li>512GB</li>
                </ul>
              </div>

              <div className="ChiTiet-info-btn">
                <div onClick={() => renderGioHang()} className="ChiTiet-mua">
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
                  <img
                    src="https://bizweb.dktcdn.net/100/434/290/themes/832160/assets/product_main_policy_2_img.jpg?1642391593337"
                    alt=""
                  />
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
              <div className="quangcao-img2">
                <img src="https://cdn.cellphones.com.vn/media/wysiwyg/tet-400x100.gif"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="macbookBanner">
          <div className="macbookBanner__content">
            <div className="content-item">
              <img src="https://cdn.cellphones.com.vn/media/wysiwyg/tet-special-banner_1200x75.gif" />
            </div>
          </div>
        </div>

        <div id="thongso" className="thongSo_tinTuc">
          <div className="thongSo">
            <h4>Thông số kỹ thuật</h4>
            <div className="thongSo_content">
              <table>
                <tbody>
                  <tr>
                    <th>Màn hình</th>
                    <td>6.1", Super Retina XDR, OLED, 2532 x 1170 Pixel</td>
                  </tr>
                  <tr>
                    <th>Camera sau</th>
                    <td>12.0 MP + 12.0 MP + 12.0 MP</td>
                  </tr>
                  <tr>
                    <th>Camera Selfie</th>
                    <td>12.0 MP</td>
                  </tr>
                  <tr>
                    <th>RAM</th>
                    <td>6 GB</td>
                  </tr>
                  <tr>
                    <th>Bộ nhớ trong</th>
                    <td>128 GB</td>
                  </tr>
                  <tr>
                    <th>Dung lượng pin</th>
                    <td>3095 mAh</td>
                  </tr>
                  <tr>
                    <th>Hệ Điều Hành</th>
                    <td>iOS 15</td>
                  </tr>
                  <tr>
                    <th>Thời gian ra mắt</th>
                    <td>09/2021</td>
                  </tr>
                </tbody>
              </table>

              <ChiTietBaiViet />

              <a
                href="#thongso"
                className="thongSo_Btn"
                onClick={() => BtnXemThem()}
              >
                Xem Thêm
              </a>
            </div>
          </div>

          <div className="tinTuc">
            <h4>Tin tức</h4>
            <div className="tinTuc_content">
              <div className="tinTuc_img">
                <img src="https://bizweb.dktcdn.net/thumb/medium/100/434/290/articles/iphone-se-3-cover.jpeg?v=1642387308287"></img>
              </div>
              <div className="tinTuc_text">
                <p>
                  iPhone SE 3 có thể ra mắt tại sự kiện mùa xuân được Apple tổ
                  chức vào tháng 3 hoặc 4 tới
                </p>
              </div>
            </div>
            <div className="tinTuc_content">
              <div className="tinTuc_img">
                <img src="https://bizweb.dktcdn.net/thumb/medium/100/434/290/articles/thong-tin-ios-16-4.jpg?v=1641889348797"></img>
              </div>
              <div className="tinTuc_text">
                <p>
                  iOS 16 sẽ có gì mới? Ngày phát hành và danh sách iPhone được
                  cập nhật
                </p>
              </div>
            </div>
            <div className="tinTuc_content">
              <div className="tinTuc_img">
                <img src="https://bizweb.dktcdn.net/thumb/medium/100/434/290/articles/smartwatch-01.jpg?v=1641357049380"></img>
              </div>
              <div className="tinTuc_text">
                <p>
                  iPhone SE 3 có thể ra mắt tại sự kiện mùa xuân được Apple tổ
                  chức vào tháng 3 hoặc 4 tớiTại sao nên chọn smartwatch có mặt
                  vuông thay vì tròn?
                </p>
              </div>
            </div>
            <div className="tinTuc_content">
              <div className="tinTuc_img">
                <img src="https://bizweb.dktcdn.net/thumb/medium/100/434/290/articles/airpods-3-featured-cover.jpg?v=1641186504990"></img>
              </div>
              <div className="tinTuc_text">
                <p>
                  Apple chia sẻ những hạn chế của Bluetooth và bộ tính năng của
                  ‌AirPods 3‌
                </p>
              </div>
            </div>
            <div className="tinTuc_content">
              <div className="tinTuc_img">
                <img src="https://bizweb.dktcdn.net/thumb/medium/100/434/290/articles/rlklduqnxjkytm9x3xqfc5-970-80-jp.jpg?v=1640752629193"></img>
              </div>
              <div className="tinTuc_text">
                <p>
                  Đánh giá iPhone 13 mini: Lựa chọn tuyệt vời cho những ai thích
                  smartphone nhỏ gọn
                </p>
              </div>
            </div>
            <div className="tinTuc_content">
              <div className="tinTuc_img">
                <img src="https://bizweb.dktcdn.net/thumb/medium/100/434/290/articles/android-vs-iphone-01.jpg?v=1640664128450"></img>
              </div>
              <div className="tinTuc_text">
                <p>
                  iPhone SE 3 có thể ra mắt tại sự kiện mùa xuân được Apple tổ
                  chức vào tháng 3 hoặc 4 tớiTại sao nên chọn smartwatch có mặt
                  vuông thay vì tròn?
                </p>
              </div>
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

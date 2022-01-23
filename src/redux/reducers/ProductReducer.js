import { APIProducts } from "../../API/APIProducts";

const stateProduct = {
  renderProduct: [
    {
      chiTiet: {
        id: 101001,
        tenSP: "Samsung Galaxy Z Fold3 5G (12GB|512GB)",
        hinhSP: [
          {
            img: "https://bizweb.dktcdn.net/thumb/large/100/434/290/products/samsung-galaxy-z-fold3-5g-256gb-didongviet-1-11f01df8-ab9d-4497-9b2f-227c135ab927.jpg?v=1629717280000",
          },
          {
            img: "https://bizweb.dktcdn.net/thumb/medium/100/434/290…one-13-pro-max-gold-1-600x600.jpg?v=1640690551347",
          },
          {
            img: "https://bizweb.dktcdn.net/thumb/medium/100/434/290…one-13-pro-max-silver-600x600.jpg?v=1640690551347",
          },
          {
            img: "https://bizweb.dktcdn.net/thumb/medium/100/434/290…e-13-pro-max-graphite-600x600.jpg?v=1640690551347",
          },
        ],
        mauSac: [
          { mauSP: "#d8351a" },
          { mauSP: "#e6fa0a" },
          { mauSP: "#000000" },
        ],
        dungLuong: [
          { dungLuongSP: "128GB" },
          { dungLuongSP: "256GB" },
          { dungLuongSP: "512GB" },
        ],
        giaSP: "44.990.000₫",
        thuongHieu: "Apple",
        maSanPham: "(Đang cập nhật...)",
        manHinh: "6.7, Super Retina XDR, OLED, 2778 x 1284 Pixel",
        cameraSau: "12.0 MP + 12.0 MP + 12.0 MP",
        cameraSelfie: "12.0 MP",
        RAM: "6 GB",
        pin: "3687 mAh",
        raMat: "10/2020",
      },
    },
  ],

  renderProducts: APIProducts,
};

export const RenderProducts = (state = stateProduct, action) => {
  switch (action.type) {
    case "RENDER_THONG_TIN_SP": {
      const dataNew = state.renderProducts.filter(
        (sp) => sp.chiTiet.id == action.data
      );
      console.log("dataNewdataNew", dataNew);
      state.renderProduct = dataNew;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

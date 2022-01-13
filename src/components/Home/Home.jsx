import React from "react";
import ListProduct from "../List-Product/List.Product";
import NavHeroBanner from "../Nav-Hero/Nav.Hero.Banner";
import "../../styles/home.style.scss";
import SmartPhone from "../SmartPhone/SmartPhone";
import TinTuc from "../TinTuc/TinTuc";
import MacbookHome from "../Macbook-Watch/MacbookHome";
import { useSelector } from "react-redux";
import AmThanhPhuKien from "../AmThanh-PhuKien/AmThanh.PhuKien";

export default function Home() {
  const arrayTongSP = useSelector(
    (state) => state.ListMobileReducer.listMobile
  );
  console.log("arrayTongWatch", arrayTongSP);

  return (
    <main className="main">
      <NavHeroBanner />
      <ListProduct />
      <SmartPhone />
      <MacbookHome arrayWatch={arrayTongSP} />
      <AmThanhPhuKien tongAPI={arrayTongSP} />
      <TinTuc />
    </main>
  );
}

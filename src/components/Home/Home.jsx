import React from "react";
import ListProduct from "../List-Product/List.Product";
import NavHeroBanner from "../Nav-Hero/Nav.Hero.Banner";
import "../../styles/home.style.scss";
import SmartPhone from "../SmartPhone/SmartPhone";
import TinTuc from "../TinTuc/TinTuc";
import MacbookHome from "../Macbook-Watch/MacbookHome";

export default function Home() {
  return (
    <main className="main">
      <NavHeroBanner />
      <ListProduct />
      <SmartPhone />
      <MacbookHome />
      <TinTuc />
    </main>
  );
}

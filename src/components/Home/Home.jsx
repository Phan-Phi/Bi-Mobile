import React from "react";
import ListProduct from "../List-Product/List.Product";
import NavHeroBanner from "../Nav-Hero/Nav.Hero.Banner";
import "../../styles/home.style.scss";

export default function Home() {
  return (
    <main className="main">
      <NavHeroBanner />
      <ListProduct />
    </main>
  );
}

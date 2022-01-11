import React from "react";
import "../../styles/navHeroBanner.style.scss";
import Hero from "./Hero";
import HeroBanner from "./Hero.Banner";
import NavBar from "./NavBar";

export default function NavHeroBanner() {
  return (
    <section className="NavHeroBanner">
      <div className="NavHeroBanner__content">
        <NavBar />
        <Hero />
        <HeroBanner />
      </div>
    </section>
  );
}

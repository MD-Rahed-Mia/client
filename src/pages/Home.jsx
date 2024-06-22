import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WhatOnMind from "../components/WhatOnMind";
import ProductSlider from "../components/ProductSlider";
import ProductList from "../components/ProductList";
import BestCuisine from "../components/BestCuisine";
import ExploreResturant from "../components/ExploreRestuarant";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <hr />
      <WhatOnMind />
      <hr />
      <ProductSlider title={"Our top food menu"} />
      <hr />
      <ProductList />
      <hr />
      <BestCuisine />
      <hr />
      <ExploreResturant />
      <Footer />
    </>
  );
}

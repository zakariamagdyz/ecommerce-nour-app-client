import React from "react";

import Slider from "../components/Slider.jsx";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products.jsx";

const Home = () => {
  return (
    <div>
      <Slider />
      <Categories />
      <Products />
    </div>
  );
};

export default Home;

import React from "react";

import Slider from "../components/Slider.jsx";
import Categories from "../components/Categories.jsx";
import Products from "../components/Products.jsx";
import Navbar from "../components/Navbar.jsx";
import Announcement from "../components/Announcement.jsx";
import Footer from "../components/Footer.jsx";
import Newsletter from "../components/Newsletter.jsx";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;

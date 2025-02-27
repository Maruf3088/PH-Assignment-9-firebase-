import React from "react";
import SwiperBanner from "../components/SwiperBanner";
import TopBrands from "../components/TopBrands";
import BrandsOnSale from "../components/BrandsOnSale";
import Faq from "../components/Faq";
import Contact from "../components/contact";
import { Helmet } from "react-helmet-async";
const Home = () => {
 
  return (
    <div>
     
      <SwiperBanner></SwiperBanner>
      <TopBrands></TopBrands>
      <BrandsOnSale></BrandsOnSale>
      <Faq></Faq>
      <Contact></Contact>
    </div>
  );
};

export default Home;

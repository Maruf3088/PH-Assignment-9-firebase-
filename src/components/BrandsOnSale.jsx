import React, { useEffect, useState } from "react";
import BrandsOnSaleCard from "./BrandsOnSaleCard";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css"; // ✅ Import AOS styles

const BrandsOnSale = () => {
  const [brands, setBrands] = useState(null);
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => console.error("Error fetching brands:", error));
  }, []); // Add dependency array to avoid infinite loop

  
  return (
    <div className="w-11/12 mx-auto">
      <h1 data-aos="fade-up" data-aos-delay="50" data-aos-once="false" className="text-3xl text-center font-bold">Brands on Sale</h1>
      <p  data-aos="fade-up" data-aos-delay="100" className="text-center text-sm font-semibold mt-3">
        ⏳ Hurry Up! Limited Time Offers on Your Favorite Brands – Shop Now and
        Save Big! 🛍️🔥
      </p>
      <div data-aos="fade-up" data-aos-delay="300"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 place-items-center">
        {brands &&
          brands.map((brand) => {
            return <BrandsOnSaleCard  key={brand._id} brand={brand} />; // Ensure you return the component
          })}
      </div>
      <div className="flex my-5">
        <Link className="btn mx-auto bg-blue-600 text-white" to={"/brands"}>
          Show More
        </Link>
      </div>
    </div>
  );
};

export default BrandsOnSale;

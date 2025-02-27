import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const TopBrands = () => {
  const [brands, setBrands] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetch("/brands.json") // Ensure brands.json is correctly placed in public folder or adjust the path
      .then((res) => res.json())
      .then((data) => {
        setBrands(data);
      })
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
        🔥 Top Brands 🔥
      </h2>

      <Marquee pauseOnHover={true} speed={50} gradient={true}>
        {brands.map((brand) => (
          <Link to={`/brand/${brand._id}`} key={brand._id} className="mx-6">
            <img
              src={brand.brand_logo} // Correct property for the logo
              alt={brand.brand_name} // Use correct brand name
              className="h-20  ml-12 object-contain transition-transform transform hover:scale-110 duration-300"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
};

export default TopBrands;

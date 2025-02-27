import React, { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

// BrandsPage component
const BrandsPage = () => {
  const [brands, setBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  // Filter brands based on search query
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-6xl mx-auto py-10 my-20">
      {/* Page Title */}
      <h1
        data-aos="fade-down"
        className="text-4xl font-extrabold text-center text-gray-800 mb-6"
      >
        All Brands Information
      </h1>

      {/* Search Bar */}
      <div className="mb-8 text-center">
        <input
          type="text"
          placeholder="Search Brands..."
          className="input input-bordered w-80"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Brands Card Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBrands.map((brand) => (
          <div
            key={brand._id}
            className="card bg-white shadow-2xl hover:shadow-xl rounded-lg transition-all ease-in-out transform hover:scale-105 duration-300 p-6"
            data-aos="fade-up"
            data-aos-delay={brand._id * 150}
          >
            <div className="flex items-center mb-4">
              {/* Brand Logo */}
              <img
                src={brand.brand_logo}
                alt={brand.brand_name}
                className="h-20 w-20 object-contain rounded-full border-4 border-gradient-to-r from-blue-500 to-purple-500 mr-4"
              />
              <div>
                {/* Brand Name & Rating */}
                <h2 className="text-2xl font-semibold text-gray-800">
                  {brand.brand_name}
                </h2>
                <div className="flex items-center text-yellow-400">
                  {/* Rating with Stars */}
                  <FaStar />
                  <span className="ml-2">{brand.rating}</span>
                </div>
              </div>
            </div>

            {/* Brand Description */}
            <p className="text-gray-600 mb-4">{brand.description}</p>

            {/* Sale Badge & Button */}

            {brand.isSaleOn && (
              <div className="flex items-center justify-between mt-auto">
                <Link
                  to={`/brand/${brand._id}`}
                  className="btn btn-primary btn-sm transition-all duration-300 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
                >
                  View Coupons
                </Link>
                <div className="text-xl font-bold text-red-600 animate-bounce">
                  Sale is On!
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandsPage;

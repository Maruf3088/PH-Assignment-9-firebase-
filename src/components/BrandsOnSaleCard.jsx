import React from "react";
import { FaTag, FaStore, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BrandsOnSaleCard = ({ brand }) => {
  if (!brand.isSaleOn) {
    return null;
  }

  return (
    <div  data-aos="fade-up" data-aos-delay={brand._id*100} className="card w-80 bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      {/* Brand Logo */}
      <figure className=" py-4 flex justify-center">
        <img
          src={brand.brand_logo}
          alt={brand.brand_name}
          className="h-20 object-contain"
        />
      </figure>

      <div className="card-body p-5">
        {/* Brand Name & Sale Badge */}
        <h2 className="card-title text-lg font-semibold text-gray-800 flex justify-between items-center">
          {brand.brand_name}
          <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded">
            On Sale
          </span>
        </h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">{brand.description}</p>

        {/* Info Badges */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center text-gray-700 text-sm">
            <FaStore className="mr-1 text-gray-500" />
            {brand.category}
          </div>
          <div className="flex items-center text-gray-700 text-sm">
            <FaTag className="mr-1 text-gray-500" />
            {brand.coupons.length} Coupons
          </div>
        </div>

        {/* View Coupons Button */}
        <Link
          to={`/brand/${brand._id}`}
          className="mt-4 block bg-blue-600 text-white text-sm font-medium py-2 rounded-md text-center hover:bg-blue-700 transition"
        >
          View Coupons <FaArrowRight className="inline ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default BrandsOnSaleCard;

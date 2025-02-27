import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-toastify";
import { FaShoppingCart } from "react-icons/fa"; 
import "react-toastify/dist/ReactToastify.css"; // Import the styles for toast

const BrandDetails = () => {
  const [brand, setBrand] = useState(null); // Single brand
  const { id } = useParams(); // Get brand ID from URL

  // Fetch brand data when component is mounted
  useEffect(() => {
    fetch("/brands.json")
      .then((res) => res.json())
      .then((data) => setBrand(data.find((b) => b._id === id)))
      .catch((error) => console.error("Error fetching brand:", error));
  }, [id]);

  // Show success toast message after copying coupon code
  const handleCopy = () => {
    toast.success("Coupon code copied successfully!");
  };

  if (!brand) return <div>Loading...</div>; // If brand data is not yet loaded

  return (
    <div  className="container mx-auto py-10 my-14">
      {/* Title and Subtitle Section */}
      <div data-aos="fade-up" className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-900">
          {brand.brand_name} - Exclusive Coupons
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Discover all the latest offers and exclusive discounts available for{" "}
          {brand.brand_name}.
        </p>
      </div>

      {/* Brand Info Card */}
      <div  data-aos="fade-up" data-aos-delay="100" className="card bg-base-100 shadow-xl border p-6 mb-10">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <img
            src={brand.brand_logo}
            alt={brand.brand_name}
            className="h-24 w-24 object-contain"
          />
          <div className="flex flex-col items-start ml-4">
            {/* Brand Name and Rating */}
            <h1 className="text-3xl font-semibold">{brand.brand_name}</h1>
            <div className="flex items-center mt-2">
              <span className="text-yellow-400 text-xl">
                {"⭐".repeat(Math.floor(brand.rating))}
              </span>
              <span className="ml-2 text-xl">{brand.rating}</span>
            </div>
            {/* Brand Description */}
            <p className="mt-2 text-gray-600">{brand.description}</p>
          </div>
        </div>
      </div>

      {/* Coupons Section */}
      <h2 data-aos="fade-up" data-aos-delay="200" className="text-3xl font-semibold text-center mb-6">
        Available Coupons
      </h2>

      <div data-aos="fade-up" data-aos-delay="300"  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {brand.coupons.map((coupon) => (
          <div
            key={coupon.coupon_code}
            className="card bg-base-100 shadow-xl border p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Coupon Code */}
            <h3 className="text-xl font-semibold">{coupon.coupon_code}</h3>
            <p className="mt-2">{coupon.description}</p>
            <p className="text-sm text-gray-500 mt-2">
              Expires on: {coupon.expiry_date}
            </p>

            {/* Buttons Section */}
            <div className="flex justify-between items-center mt-6">
              {/* Copy Coupon Code Button */}
              <CopyToClipboard text={coupon.coupon_code} onCopy={handleCopy}>
                <button className="btn btn-sm btn-primary flex items-center">
                  <FaShoppingCart className="mr-2" />
                  Copy Code
                </button>
              </CopyToClipboard>

              {/* Use Now Button */}
              <a
                href={brand.shop_Link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-secondary"
              >
                Use Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandDetails;

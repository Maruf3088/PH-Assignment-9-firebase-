import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SwiperBanner = () => {
  const slides = [
    {
      id: 1,
      image:
        "https://plus.unsplash.com/premium_vector-1682269553505-460794d05233?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHNhbGV8ZW58MHx8MHx8fDA%3D",
      title: "Huge Discounts on Electronics!",
      subtitle:
        "Get up to 60% off on the latest gadgets, smartphones, and accessories. Don't miss out on our limited-time offers!",
    },
    {
      id: 2,
      image:
        "https://plus.unsplash.com/premium_vector-1682305365105-cfdf78c90978?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhbGV8ZW58MHx8MHx8fDA%3D",
      title: "Fashion Sale is Live!",
      subtitle:
        "Upgrade your wardrobe with trendy outfits and stylish accessories. Enjoy discounts up to 50% on selected brands.",
    },
    {
      id: 3,
      image:
        "https://plus.unsplash.com/premium_vector-1728882767550-eca592037156?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHNhbGV8ZW58MHx8MHx8fDA%3D",
      title: "Supermarket Weekly Deals!",
      subtitle:
        "Stock up on groceries, fresh produce, and household essentials at unbeatable prices. Discounts available all week long.",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_vector-1682301669172-2fe738999891?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fHNhbGV8ZW58MHx8MHx8fDA%3D",
      title: "Exclusive Coupons for You!",
      subtitle:
        "Unlock special deals and promo codes for your favorite brands. Save big on your next online shopping spree!",
    },
  ];

  return (
    <div className="w-11/12 w-7xl mx-auto my-28">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="rounded-xl shadow-lg"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg rounded-xl overflow-hidden p-6">
              {/* Left Section - Image */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={slide.image}
                  alt="Banner"
                  className="w-full h-72 md:h-96 object-cover rounded-lg shadow-md"
                />
              </div>

              {/* Right Section - Title & Subtitle */}
              <div className="w-full md:w-1/2 p-8 flex flex-col items-center md:items-start justify-center text-center md:text-left text-white">
                <h2 className="text-3xl md:text-5xl font-extrabold drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mt-4 leading-relaxed opacity-90">
                  {slide.subtitle}
                </p>
                <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200 transition">
                  Explore Deals
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperBanner;

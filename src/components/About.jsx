import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5 md:px-20 my-12">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          About Discount PRO
        </h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          Discount PRO is a cutting-edge Coupon Collecting Application designed
          to help users find and use discount coupons from top e-commerce stores
          in Bangladesh. We collect and organize the latest coupon codes and
          deals so that users can maximize their savings effortlessly.
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Key Features
        </h2>
        <ul className="list-disc list-inside text-gray-700 text-lg mt-2">
          <li>Firebase authentication (Email & Google login)</li>
          <li>Easy coupon copying with one click</li>
          <li>Detailed brand and coupon information</li>
          <li>Responsive and user-friendly design</li>
          <li>Secure authentication & private routes</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          Project Overview:
        </h2>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="my-4 rounded-lg"
        >
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1560250056-07ba64664864?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsZXN8ZW58MHx8MHx8fDA%3D"
              alt="Screenshot 1"
              className="rounded-lg shadow-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://plus.unsplash.com/premium_photo-1664201889896-6a42c19e953a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2FsZXN8ZW58MHx8MHx8fDA%3D"
              alt="Screenshot 2"
              className="rounded-lg shadow-md"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXN8ZW58MHx8MHx8fDA%3D"
              alt="Screenshot 3"
              className="rounded-lg shadow-md"
            />
          </SwiperSlide>
        </Swiper>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          About the Developer
        </h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          I am a passionate web developer with experience in React, Firebase,
          and Tailwind CSS. This project was developed as part of my learning
          journey to build scalable and interactive web applications.
        </p>

        <div className="flex justify-center gap-6 mt-6">
          <a
            href="https://github.com/yourgithub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourlinkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 text-2xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/yourfacebook"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-2xl"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;

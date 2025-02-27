import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-16 px-6">
      {/* Title and Subtitle */}
      <div className="text-center mb-12 text-black">
        <h2
          data-aos-delay="100"
          data-aos="fade-up"
          className="text-5xl font-bold"
        >
          Contact Us
        </h2>
        <p
          data-aos-delay="200"
          data-aos="fade-up"
          className="text-lg mt-3 opacity-90"
        >
          We’d love to hear from you! Feel free to reach out.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div
          data-aos-delay="300"
          data-aos="fade-left"
          className="hidden md:block"
        >
          <img
            src="/images/contact.png"
            alt="Contact Us"
            className="w-full h-full  mx-auto"
          />
        </div>

        <div
          data-aos-delay="300"
          data-aos="fade-right"
          className="bg-white p-8 rounded-lg border-gray-500 border backdrop-blur-md bg-opacity-90"
        >
          <div className="mb-8 space-y-4">
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-xl text-blue-600" />
              <p className="text-gray-700">
                123 Business Avenue, Dhaka, Bangladesh
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-xl text-blue-600" />
              <p className="text-gray-700">+880 123 456 789</p>
            </div>
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-xl text-blue-600" />
              <p className="text-gray-700">support@yourdomain.com</p>
            </div>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full h-32"
              ></textarea>
            </div>

            <button className="btn btn-primary w-full text-lg hover:bg-blue-700 transition duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

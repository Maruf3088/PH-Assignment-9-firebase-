import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();
    const userName = e.target.userName.value;
    const imageUrl = e.target.imageUrl.value;

    updateUserProfile(userName, imageUrl)
      .then(() => {
        toast.success("Profile updated successfully!");
        e.target.reset();
        navigate("/myProfile");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen  p-6">
      {/* Illustration Section */}
      <div data-aos="fade-left" className="hidden lg:flex w-1/2 justify-center">
        <img
          src="/images/updateProfile.png"
          alt="Update Profile Illustration"
          className="w-1/2 h-3/4 object-cover"
        />
      </div>

      {/* Update Form Section */}
      <div data-aos="fade-right" className="bg-white p-8 rounded-lg shadow-xl w-full lg:w-1/3">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Update Profile
        </h2>

        {/* User Avatar */}
        <div className="flex justify-center mb-4">
          <img
            src={user?.photoURL || "https://via.placeholder.com/100"}
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-blue-400 object-cover shadow-lg"
          />
        </div>

        {/* Update Form */}
        <form onSubmit={handleUpdate} className="space-y-5">
          <div>
            <label className="block font-semibold text-gray-600">
              New Username:
            </label>
            <input
              type="text"
              name="userName"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter new username"
              required
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-600">
              New Profile Image URL:
            </label>
            <input
              type="text"
              name="imageUrl"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter image URL"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition transform hover:scale-105"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

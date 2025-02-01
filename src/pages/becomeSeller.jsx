import React from 'react'
import { useState } from "react";

 const BecomeSeller = () => {
     const [sellerData, setFormData] = useState({
        location:"",
        addharCard:"",
        panCard:"",
        contactNumber:"",
        email: "",
        password:""
      });
    
      function changeHandler(event) {
        const { name, value, checked, type } = event.target;
        setFormData((prev) => {
          return { ...prev, [name]: type === "checkbox" ? checked : value };
        });
      }
      function submitHandler(event)
      {
        event.preventDefault();
        console.log("Form Give DAta")
        console.log(sellerData);
      }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Become a Seller</h2>
        <form  onSubmit={submitHandler}>
          {/* Shop Location */}
          <div className="mb-4">
            <label
              htmlFor="shopLocation"
              className="block text-sm font-medium text-gray-700"
            >
              Shop Location:
            </label>
            <input
              type="text"
              id="shopLocation"
              name="location"
              value={sellerData.location}
              onChange={changeHandler}
              placeholder="Enter shop location"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Aadhar Card */}
          <div className="mb-4">
            <label
              htmlFor="aadharCard"
              className="block text-sm font-medium text-gray-700"
            >
              Aadhar Card Number:
            </label>
            <input
              type="text"
              id="aadharCard"
              name="addharCard"
              value={sellerData.addharCard}
              onChange={changeHandler}
              placeholder="Enter Aadhar card number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Pan Card */}
          <div className="mb-4">
            <label
              htmlFor="panCard"
              className="block text-sm font-medium text-gray-700"
            >
              Pan Card Number:
            </label>
            <input
              type="text"
              id="panCard"
              name="panCard"
              value={sellerData.panCard}
              onChange={changeHandler}
              placeholder="Enter Pan card number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Contact Number */}
          <div className="mb-4">
            <label
              htmlFor="contactNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number:
            </label>
            <input
              type="text"
              id="contactNumber"
              name="contactNumber"
              value={sellerData.contactNumber}
              onChange={changeHandler}
              placeholder="Enter contact number"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={sellerData.email}
              onChange={changeHandler}
              placeholder="Enter email address"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={sellerData.password}
              onChange={changeHandler}
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}
export default BecomeSeller
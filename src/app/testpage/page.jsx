"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./page.css";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    dateOfBirth: "",
    address: "",
  });
  const [error, setError] = useState(null);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (res.status === 201) {
        router.push("/login?success=Account has been created");
      } else {
        const data = await res.json();
        setError(data.message || "Something went wrong!");
      }
    } catch (err) {
      setError("Something went wrong!");
      console.log(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log(error);
  return (
    <div className="relative min-h-screen flex mt-40">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-purple-900 text-white bg-no-repeat bg-cover relative">
          <div className="absolute bg-gradient-to-b from-blue-900 to-gray-900 opacity-75 inset-0 z-0"></div>
          <div className="absolute triangle  min-h-screen right-0 w-16"></div>

          <img
            src="https://jasper-pimstorage-skullcandy.s3.us-west-1.amazonaws.com/bd2253a9671dac36a95faf821b52e78935050140be1718ce001f6aace45cf25c.png"
            className="h-96 absolute right-5 mr-5"
          />
          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              Reference site about Lorem Ipsum..
            </div>
            <div className="sm:text-sm xl:text-md text-gray-200 font-normal">
              {" "}
              What is Lorem Ipsum Lorem Ipsum is simply dummy text of the
              printing and typesetting industry Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book it has?
            </div>
          </div>
          <ul className="circles">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full xl:w-2/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Hello Travelers!
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Please register to explore more
              </p>
            </div>

            {/* <div className="flex flex-row justify-center items-center space-x-3">
              
              <a
                href=""
                target="_blank"
                className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <FaGoogle className="w-6 h-6 text-white" />
              </a>
              <a
                href=""
                target="_blank"
                className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <FaGithub className="w-6 h-6 text-white" />
              </a>

              <a
                href=""
                target="_blank"
                className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <FaFacebookF className="w-6 h-6 text-white" />
              </a>
              
            </div> */}

            {/* <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-200"></span>
              <span className="text-gray-300 font-normal">
                or continue with
              </span>
              <span className="h-px w-16 bg-gray-200"></span>
            </div> */}
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* <input type="hidden" name="remember" value="true" /> */}

              {/* name */}
              <div className="relative">
                <input
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* email */}
              <div className="relative">
                <div className="absolute right-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>

                <input
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* password */}
              <div className="relative">
                <input
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* confirm password */}
              <div className="relative">
                <div className="absolute right-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-8 text-green-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                />
              </div>

              {/* Phone number */}
              <div className="relative">
                <input
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>

              {/* DOB */}
              <div className="relative">
                <input
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  type="date"
                  name="dateOfBirth"
                  placeholder="Date of Birth"
                  value={formData.dateOfBirth}
                  onChange={handleInputChange}
                />
              </div>

              {/* Address */}
              <div className="relative">
                <textarea
                  className="w-full text-base px-4 py-2 border-b bg-gray-50 border-gray-300 focus:outline-none rounded-2xl focus:border-indigo-500"
                  //   type="text"
                  name="address"
                  rows="4"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              {/* other component */}

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember_me"
                    name="remember_me"
                    type="checkbox"
                    className="h-4 w-4 bg-blue-500 focus:ring-blue-400 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember_me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="text-indigo-400 hover:text-blue-500">
                    Forgot your password?
                  </a>
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-lg tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                >
                  Register
                </button>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              {/* <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
                <span>Don't have an account?</span>
                <a
                  href="#"
                  className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
                >
                  Sign up
                </a>
              </p> */}
            </form>

            <p className="flex space-x-5  text-md text-gray-500">
              <span>Already have an account?</span>
              <a
                href="/login"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Log in
              </a>
            </p>

            {/* <div className="flex items-center justify-center space-x-2">
              <span className="h-px w-16 bg-gray-200"></span>
              <span className="text-gray-300 font-normal">
                or continue with
              </span>
              <span className="h-px w-16 bg-gray-200"></span>
            </div>

            <div className="flex flex-row justify-center items-center space-x-3">
              
              <a
                href=""
                target="_blank"
                className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-500 hover:shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <FaGoogle className="w-6 h-6 text-white" />
              </a>
              <a
                href=""
                target="_blank"
                className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <FaGithub className="w-6 h-6 text-white" />
              </a>

              <a
                href=""
                target="_blank"
                className="w-11 h-11 items-center justify-center inline-flex rounded-2xl font-bold text-lg bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300"
              >
                <FaFacebookF className="w-6 h-6 text-white" />
              </a>
              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

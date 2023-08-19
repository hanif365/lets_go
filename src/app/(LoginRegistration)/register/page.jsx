"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import "./page.css";
import { FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa6";
import upcomingEventsData from "../../../data/UpcomingEventsData.json";

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

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  // Function to check if the email is valid
  const isEmailValid = (email) => {
    return emailRegex.test(email);
  };

  // Function to check if password and confirmPassword match
  const doPasswordsMatch = () => {
    return formData.password === formData.confirmPassword;
  };

  console.log(error);

  const settings = {
    // dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    speed: 3000, // Animation speed in milliseconds
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000, // Delay between each auto scroll (in milliseconds)
    swipeToSlide: true,
    centerMode: true, // Enable center mode
    centerPadding: "0px", // Adjust padding to center the cards (60px for left and right showing)
  };

  return (
    <div className="relative min-h-screen flex">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        {/* image box start */}
        <div className="sm:w-1/2 md:w-2/5 hidden md:block">
          <Slider {...settings}>
            {upcomingEventsData.map((event, index) => (
              <div className="sm:w-1/2 md:w-2/5 h-full hidden md:flex flex-auto justify-center items-center  overflow-hidden text-white bg-no-repeat bg-cover relative  bg-gradient-to-r from-sky-500 to-indigo-400">
                <div className="relative">
                  <Image
                    src={event.locationThumbnailImg}
                    alt="upcoming event Image"
                    width={2000}
                    height={2000}
                    className="w-full h-[155vh] 2xl:h-[125vh]"
                  />

                  {/* when Image show uncomment below line */}
                  <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center px-10 z-[1]">
                    {/* <div className="text-white flex flex-col  px-10 z-[1]"> */}
                    <h1 className="text-2xl lg:text-5xl 2xl:text-7xl font-bold ">
                      Glad to see you!
                    </h1>
                    <p className="text-lg lg:text-xl 2xl:text-2xl font-bold pt-80">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eos, saepe. Deserunt, quia facere. Vitae, inventore.
                      Aliquam quos ut accusamus commodi.
                    </p>
                  </div>
                  {/* when Image show uncomment below line */}
                  <div className="absolute top-0 left-0 right-0 bottom-0  bg-gradient-to-b from-blue-300 via-blue-500 to-blue-800 opacity-40"></div>
                </div>
                {/*  */}
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
            ))}
          </Slider>
        </div>
        {/* image box end */}

        <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full md:w-3/5 p-8 md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white">
          <div className="max-w-3xl w-full space-y-8 pt-20">
            <div className="">
              <h2 className="mt-6 text-3xl font-bold text-gray-900">
                Hello Travelers!
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Please register to explore more
              </p>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              {/* <input type="hidden" name="remember" value="true" /> */}

              {/* name */}
              <div className="relative">
                <input
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-[#4C50E8]"
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
                {isEmailValid(formData.email) && (
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
                )}

                <input
                  className={`w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl ${
                    isEmailValid(formData.email)
                      ? "focus:border-[#4C50E8]"
                      : "focus:border-red-500"
                  }`}
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
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-[#4C50E8]"
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
                {formData.confirmPassword !== "" && doPasswordsMatch() && (
                  <div className="absolute right-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-8 text-green-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      title="Password matched"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                )}
                <input
                  className={`w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl ${
                    formData.confirmPassword !== "" && doPasswordsMatch()
                      ? "focus:border-[#4C50E8]"
                      : "focus:border-red-500"
                  }`}
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
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-[#4C50E8]"
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
                  className="w-full text-base px-4 py-2 border-b border-gray-300 focus:outline-none rounded-2xl focus:border-[#4C50E8]"
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
                  className="w-full text-base px-4 py-2 border-b bg-gray-50 border-gray-300 focus:outline-none rounded-2xl focus:border-[#4C50E8]"
                  //   type="text"
                  name="address"
                  rows="4"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>

              {/* other component */}

              {/* <div className="flex items-center justify-between">
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
              </div> */}
              <div>
                <button
                  type="submit"
                  // className="w-full register_btn relative flex justify-center bg-gradient-to-r from-indigo-500 to-blue-600 hover:bg-gradient-to-l hover:from-blue-500 hover:to-indigo-600 text-gray-100 p-4 rounded-lg tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  className="text-[14px] lg:text-[16px] register_btn w-full flex justify-center items-center px-10 py-8 relative border uppercase font-semibold tracking-wider leading-none overflow-hidden bg-[#070B39] rounded-md text-white cursor-pointer"
                >
                  <span className="absolute inset-0 bg-yellow-400 rounded"></span>
                  <span className="absolute inset-0 flex justify-center items-center font-bold">
                    Register
                  </span>
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
              <Link
                href="/login"
                className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
              >
                Log in
              </Link>
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

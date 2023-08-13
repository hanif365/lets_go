"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

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

  return (
    <div className="my-40 bg-red-500">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="flex-1 p-10 lg:p-0 bg-green-500">
          <Image
            src="/faq_img.png"
            alt="Faq Image"
            width={1000}
            height={1000}
            className="mx-auto w-full h-full"
          />
        </div>
        <div className="flex-1 self-center px-10 lg:px-20 lg:py-10 text-center lg:text-left">
          <h3 className="text-xl lg:text-2xl 2xl:text-4xl">Hello there!</h3>
          <h5 className="text-base 2xl:text-xl">Register to explore more</h5>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Username"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="p-5 "
            />
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleInputChange}
            />
            <input
              type="date"
              name="dateOfBirth"
              placeholder="Date of Birth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleInputChange}
            />
            <button type="submit">Register</button>
            {error && <p className="text-red-500">{error}</p>}
          </form>
          <span>- OR -</span>
          <Link href="/login">Login with an existing account</Link>
        </div>
      </div>
    </div>
  );
};

export default Register;

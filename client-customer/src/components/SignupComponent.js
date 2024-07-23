import React, { useState } from "react";
import axios from "axios";
import { message, Typography } from "antd";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [txtUsername, setTxtUsername] = useState("");
  const [txtPassword, setTxtPassword] = useState("");
  const [txtName, setTxtName] = useState("");
  const [txtPhone, setTxtPhone] = useState("");
  const [txtEmail, setTxtEmail] = useState("");
  const navigate = useNavigate();

  const btnSignupClick = (e) => {
    e.preventDefault();
    if (txtUsername && txtPassword && txtName && txtPhone && txtEmail) {
      const account = {
        username: txtUsername,
        password: txtPassword,
        name: txtName,
        phone: txtPhone,
        email: txtEmail,
      };
      apiSignup(account);
    } else {
      message.error("Please fill in all fields!");
    }
  };

  const apiSignup = (account) => {
    axios.post("/api/customer/signup", account).then((res) => {
      const result = res.data;
      alert(result.message);
      if (result.success) {
        navigate("/active");
      }
    });
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-xl">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={btnSignupClick}
        >
          <div className="pb-7 text-center">
            <Typography className="font-bold text-[#444] text-3xl">
              ĐĂNG KÝ
            </Typography>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={txtUsername}
              onChange={(e) => setTxtUsername(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={txtPassword}
              onChange={(e) => setTxtPassword(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={txtName}
              onChange={(e) => setTxtName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="tel"
              value={txtPhone}
              onChange={(e) => setTxtPhone(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              value={txtEmail}
              onChange={(e) => setTxtEmail(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              ĐĂNG KÝ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;

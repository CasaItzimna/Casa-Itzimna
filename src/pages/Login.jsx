import { AppContext } from "@/context/StateContext";
import { useRouter } from "next/router";
import React, { useState } from "react";
import axios from "axios";
import Image from "next/image";
import login from "../assets/Login/img/login.png";
import logoblanco from "../assets/Login/img/logoblanco.png";

function Login() {
  const { loginUser } = AppContext();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("/api/auth/login", credentials);
    if (response.status === 200) {
      router.push("/Dashboard");
    }
  };

  return (
    <div className="w-full h-screen flex flex-row justify-center  relative">
      <div className="absolute top-0 h-screen lg:h-full w-full z-0">
        <Image
          src={login}
          alt="login background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-full flex flex-col justify-center lg:justify-end items-center ">
      <div className=" w-[90%] lg:w-[50%] h-[65vh] lg:h-[65%] bg-[#282828]/20 border-2 rounded-xl mt-10 xl:mb-[20px] 2xl:mb-[100px] z-10 ">
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
          <h1 className="  text-white text-4xl sm:text-7xl md:text-6xl lg:text-8xl xl:text-7xl font-cinzelRegular">
            <span className="text-white text-[60px] sm:text-[100px] md:text-[100px] lg:text-[150px] xl:text-[100px]">
              C
            </span>
            asa{" "}
            <span className="text-white text-[60px] sm:text-[100px] md:text-[100px] lg:text-[150px] xl:text-[100px]">
              I
            </span>
            tzimná
          </h1>
          <h2 className="text-white text-3xl sm:text-5xl md:text-5xl font-cinzelRegular">
            Boutique
          </h2>
          {error && <p>{error}</p>}
          <form
            className="w-[80%] flex flex-col text-left mt-8"
            onSubmit={handleSubmit}
          >
            <label
              htmlFor="email"
              className="text-white font-cinzelRegular text-[10px] lg:text-sm mb-1"
            >
              E-MAIL
            </label>
            <input
              type="email"
              className="border-2 border-[#b4a692] bg-white/70  "
              name="email"
              id="email"
              onChange={handleChange}
            />
            <label
              htmlFor="password"
              className="text-white font-cinzelRegular text-[10px] lg:text-sm mb-1 mt-2"
            >
              PASSWORD
            </label>
            <input
              type="password"
              className="border-2 border-[#b4a692] bg-white/70 "
              id="password"
              name="password"
              onChange={handleChange}
            />
            <div className="flex flex-col justify-center items-center">
              <button className="bg-black/50 hover:bg-black text-white px-4 py-2 mt-4 mb-4 w-full font-Geometrica tracking-[2px]">
                SIGN IN
              </button>
              <p className="text-white uppercase font-apollo text-[9px] lg:text-[12px]">
                copyright all rights reserved - casa itzimná hotel boutique{" "}
              </p>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

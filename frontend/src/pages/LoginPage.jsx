import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import { UserContext } from "../services/userContext";
import { useNavigate } from "react-router-dom";

import img1 from "../assets/imgs/pages/img-32.png";
import img2 from "../assets/imgs/pages/img-33.png";
import img3 from "../assets/imgs/pages/img-34.png";
import img4 from "../assets/imgs/pages/img-35.png";
import { BsArrowDownRight } from "react-icons/bs";

function LoginPage() {
  const navigate = useNavigate();

  const { login } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    // Assume a login API call here
    //  const userData = await loginApiCall(email, password);
    if (password) {
      login(password);
    }

    navigate("/quizzes", { replace: true });
  };
  return (
    <Layout>
      <div className="login-form h-[calc(100vh-130px)] w-full flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
          <div className="w-full h-full hidden lg:grid grid-cols-2 gap-4 items-stretch max-w-[580px]">
            <img className="rounded-3xl w-full " src={img1} alt="" />
            <img className="rounded-3xl w-40 h-40 mt-20" src={img2} alt="" />
            <img
              className="rounded-3xl w-40 h-40 ml-[7.6rem]"
              src={img3}
              alt=""
            />
            <img className="rounded-3xl w-full" src={img4} alt="" />
          </div>
          <div className="mr-12 lg:pl-12">
            <span className="h-12 px-7 py-3.5 bg-neutral-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300 text-neutral-700 dark:text-neutral-dark-700 text-base font-bold leading-none mb-4 inline-block">
              Welcome Back!
            </span>
            <p className="text-neutral-700 mb-16 font-medium text-2xl">
              Log in to the system to receive paid quality <br />
              articles and many other great functions
            </p>
            <form action="">
              <div className="form-group grid gap-4 mb-4">
                <div className="form-group grid gap-1">
                  <label
                    htmlFor="email"
                    className="input-label text-xs font-semibold"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="input-lg rounded-lg text-sm py-2 border-2 border-cyan-800/30 placeholder:pl-2"
                  />
                </div>
              </div>
              <div className="form-group grid grid-cols-1 gap-4 mb-4">
                <div className="form-group grid gap-1">
                  <label
                    htmlFor="password"
                    className="input-label text-xs font-semibold"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Password"
                    className="input-lg rounded-lg text-sm py-2 border-2 border-cyan-800/30 placeholder:pl-2"
                  />
                </div>
              </div>
              <div className="form-group flex justify-between mb-4 mt-6">
                <div className="flex items-center mb-8">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-4 h-4 order-none outline outline-cyan-800/30 text-neutral-0  rounded cursor-pointer mr-2"
                  />
                  <label
                    htmlFor="save-info"
                    className="text-sm text-neutral-950 dark:text-neutral-dark-950"
                  >
                    Remember me
                  </label>
                </div>
                <a
                  href="#"
                  className="text-neutral-950 dark:text-neutral-dark-950 underline text-sm"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full btn bg-yellow-400 rounded-full px-8 py-2 text-lg text-center font-semibold"
              >
                Sign In <BsArrowDownRight className="inline text-2xl" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default LoginPage;

import React, { useContext, useEffect, useState } from "react";
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
  const { loginUser, user } = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const res = await loginUser(credentials);
      if (res.error) {
        setError(res?.error);
        return;
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  useEffect(() => {
    if (user?.access_token) {
      navigate("/quizzes", { replace: true });
    } else {
      console.log("Login failed, wrong username or password...");
    }
  }, [user, navigate]);

  return (
    <Layout>
      <div className="login-form h-[calc(100vh-100px)] w-full flex items-center">
        <div className="h-full items-center justify-start grid grid-cols-1 lg:grid-cols-5">
          <div className="w-full pt-5 pr-20 h-full col-span-3 hidden lg:grid grid-cols-2 gap-4 items-stretch max-w-2xl">
            <img className="rounded-3xl w-full" src={img1} alt="" />
            <div className="w-full h-full flex items-end justify-start">
              <img className="rounded-3xl w-40 h-40" src={img2} alt="" />
            </div>
            <div className="w-full h-full flex items-start justify-end">
              <img className="rounded-3xl w-40 h-40" src={img3} alt="" />
            </div>
            <img className="rounded-3xl w-full" src={img4} alt="" />
          </div>
          <div className="mr-12 h-[calc(100vh-120px)] flex flex-col justify-center w-full col-span-2">
            <span className="h-12 w-fit px-7 py-3.5 bg-neutral-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300 text-neutral-700 dark:text-neutral-dark-700 text-base font-bold leading-none mb-4 inline-block">
              Welcome Back!
            </span>
            <p className="text-neutral-700 mb-12 font-medium text-3xl tracking-tight">
              Log in to the system
              <br />{" "}
              <span className="whitespace-nowrap">
                to get started with your mastership.
              </span>{" "}
              <br />
              Code, tech, and more.
            </p>
            {error && (
              <div className="bg-red-400 w-full py-1 px-2 rounded-lg mb-4 font-semibold relative">
                <p>{error}</p>
                <span
                  onClick={() => setError(null)}
                  className="absolute text-2xl top-[45%] -translate-y-1/2 right-2 cursor-pointer"
                >
                  &times;
                </span>
              </div>
            )}
            <form onSubmit={handleLogin}>
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
                    name="email"
                    placeholder="Email"
                    className="input-lg pl-2 rounded-lg text-sm py-3 border-2 border-cyan-800/30 placeholder:pl-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    name="password"
                    placeholder="Password"
                    className="input-lg pl-2 rounded-lg text-sm py-3 border-2 border-cyan-800/30 placeholder:pl-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group flex justify-between mb-4 mt-6">
                <div className="flex items-center mb-8">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-4 h-4 ml-1 order-none outline outline-cyan-800/30 text-neutral-0 rounded cursor-pointer mr-2"
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
                className="w-full btn bg-yellow-400 rounded-full px-8 py-3 text-lg text-center font-semibold"
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

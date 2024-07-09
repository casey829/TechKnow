import React from "react";
import Layout from "../components/Layout";
import { BsArrowRight } from "react-icons/bs";

import BannerImg from "../assets/imgs/banner.jpeg";

function SignupPage() {
  return (
    <Layout>
      <div className="w-full h-[calc(100vh-96px)] overflow-y-hidden flex justify-start items-center">
        <div className="grid grid-cols-1 lg:gap-20 lg:grid-cols-2">
          <div className="max-w-md h-full flex flex-col items-start justify-center">
            <p className="max-w-96 text-neutral-700 mb-10  font-medium text-2xl">
              Create a new account and enjoy premium content
            </p>
            <form action="" className="w-full">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="form-group grid gap-1">
                  <label
                    htmlFor="last-name"
                    className="input-label text-xs font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="First name"
                    className="input-lg rounded-lg text-sm py-2 border-2 border-cyan-800/30 placeholder:pl-2"
                  />
                </div>
                <div className="form-group grid gap-1">
                  <label
                    htmlFor="last-name"
                    className="input-label text-xs font-semibold"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="Last name"
                    className="input-lg rounded-lg text-sm py-2 border-2 border-cyan-800/30 placeholder:pl-2"
                  />
                </div>
              </div>
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
              <div className="form-group grid grid-cols-2 gap-4 mb-4">
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
                <div className="form-group grid gap-1">
                  <label
                    htmlFor="password"
                    className="input-label text-xs font-semibold"
                  >
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    placeholder="Repeat Password"
                    className="input-lg rounded-lg text-sm py-2 border-2 border-cyan-800/30 placeholder:pl-2"
                  />
                </div>
              </div>
              <div className="form-group flex justify-between mb-4 mt-6">
                <div className="flex items-center mb-8">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-4 h-4 border-none outline outline-cyan-800/30 text-neutral-0  rounded-lg cursor-pointer mr-2"
                  />
                  <label
                    htmlFor="save-info"
                    className="text-sm text-neutral-950 dark:text-neutral-dark-950"
                  >
                    I agree to the{" "}
                    <a href="#" className="font-bold">
                      Terms &amp; conditions
                    </a>
                  </label>
                </div>
                <a
                  href="#"
                  className="text-neutral-950 dark:text-neutral-dark-950 underline text-sm"
                >
                  Need help?
                </a>
              </div>
              <button
                type="submit"
                className="w-full btn bg-yellow-400 rounded-full px-8 py-2 text-lg text-neutral-950 font-bold text-center"
              >
                Sign Up <BsArrowRight className="inline text-2xl" />
              </button>
            </form>
          </div>
          <div className="w-full h-full relative">
            <div className="w-full md:max-w-[565px] rounded-[26px] bg-gradient-to-t from-primary-light-950 via-primary-light-300 to-primary-light-200 p-2">
              <img
                className="rounded-3xl h-[calc(100vh-130px)] md:max-w-[550px]"
                src={BannerImg}
                alt="banner image"
              />
            </div>
            <div className="absolute w-full h-full -z-10 rounded-3xl bg-gradient-to-b from-cyan-600 to-yellow-500 bottom-[-20px] -right-5 flex justify-center items-center">
              {/* <img src={SignupImg} alt="signup image" /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignupPage;

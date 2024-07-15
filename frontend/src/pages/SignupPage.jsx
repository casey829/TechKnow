import React, { useState, useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { BsArrowDownRight } from "react-icons/bs";
import BannerImg from "../assets/imgs/banner.jpeg";
import { UserContext } from "../services/userContext";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const navigate = useNavigate();
  const { registerUser, user } = useContext(UserContext);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== repeatPassword) {
      alert("Passwords do not match!");
      return;
    }
    const userData = {
      firstname,
      lastname,
      email,
      password,
    };
    try {
      const res = await registerUser(userData);

      if (res.error) {
        setError(res?.error);
        return;
      }
      navigate("/login", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/quizzes", { replace: true });
    }
  }, [user, navigate]);

  return (
    <Layout>
      <div className="w-full h-full flex justify-start items-center">
        <div className="w-full h-full grid grid-cols-1 lg:gap-20 lg:grid-cols-2">
          <div className="max-w-md h-full flex flex-col items-start justify-center">
            <p className="max-w-96 text-neutral-700 mt-8 mb-10 font-medium text-3xl">
              Create a new account and enjoy premium content
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
            <form onSubmit={handleSubmit} className="w-full">
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="form-group grid gap-1">
                  <label
                    htmlFor="first-name"
                    className="input-label text-xs font-semibold"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First name"
                    className="input-lg pl-2 rounded-lg text-sm py-2.5 border-2 border-cyan-800/30 placeholder:pl-2"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
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
                    name="lastname"
                    placeholder="Last name"
                    className="input-lg pl-2 rounded-lg text-sm py-2.5 border-2 border-cyan-800/30 placeholder:pl-2"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
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
                    name="email"
                    placeholder="Email"
                    className="input-lg pl-2 rounded-lg text-sm py-2.5 border-2 border-cyan-800/30 placeholder:pl-2"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
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
                    name="password"
                    placeholder="Password"
                    className="input-lg pl-2 rounded-lg text-sm py-2.5 border-2 border-cyan-800/30 placeholder:pl-2"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="form-group grid gap-1">
                  <label
                    htmlFor="repeat-password"
                    className="input-label text-xs font-semibold"
                  >
                    Repeat Password
                  </label>
                  <input
                    type="password"
                    name="repeatPassword"
                    placeholder="Repeat Password"
                    className="input-lg pl-2 rounded-lg text-sm py-2.5 border-2 border-cyan-800/30 placeholder:pl-2"
                    value={repeatPassword}
                    onChange={(e) => setRepeatPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="form-group flex justify-between mb-4 mt-6">
                <div className="flex items-center mb-8">
                  <input
                    type="checkbox"
                    id="save-info"
                    className="w-4 h-4 ml-1 border-none outline outline-cyan-800/30 text-neutral-0 rounded-lg cursor-pointer mr-2"
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
                <a href="#" className="text-neutral-950 underline text-sm">
                  Need help?
                </a>
              </div>
              <button
                disabled={password.length < 8 ? true : false}
                type="submit"
                className={`"w-full btn w-full rounded-full px-8 py-3 text-lg text-neutral-950 font-bold text-center" ${
                  password.length < 8 ? "bg-gray-600" : "bg-yellow-400"
                }`}
              >
                Sign Up <BsArrowDownRight className="inline text-2xl" />
              </button>
            </form>
          </div>
          <div className="w-full h-full relative">
            <div className="relative z-20 w-full md:max-w-[565px] rounded-[26px] bg-gradient-to-t from-primary-light-950 via-primary-light-300 to-primary-light-200 p-2">
              <img
                className="rounded-3xl h-[calc(100vh-130px)] md:max-w-[550px] md:-translate-x-14"
                src={BannerImg}
                alt="banner image"
              />
            </div>
            <div className="absolute w-[calc(100%-1rem)] h-full z-10 rounded-3xl bg-gradient-to-b from-cyan-600 to-yellow-500 bottom-[-20px] -right-0 flex justify-center items-center">
              {/* <img src={SignupImg} alt="signup image" /> */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default SignupPage;

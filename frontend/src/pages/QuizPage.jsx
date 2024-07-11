import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../services/userContext";
import {
  BiChat,
  BiChevronLeftSquare,
  BiChevronRight,
  BiChevronRightSquare,
  BiShare,
} from "react-icons/bi";

import tpImg from "../assets/imgs/animation.gif";
import icon1 from "../assets/imgs/icons9.svg";
import icon2 from "../assets/imgs/icon4.svg";
import icon3 from "../assets/imgs/icon2.svg";
import { BsArrowLeft, BsQuestionCircleFill } from "react-icons/bs";

function QuizPage() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };
  useEffect(() => {
    console.log("USER:", user);
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user]);

  return (
    <Layout>
      <section className="relative w-full h-fit grid grid-cols-5 gap-4 py-12">
        <div className="w-full col-span-3">
          <h2 className="font-bold text-6xl text-cyan-700 mb-5">
            HTML Assessment
          </h2>
          <span className="h-[3px] w-32 bg-cyan-700 flex rounded-full my-5"></span>
          <p className="max-w-lg font-semibold">
            HTML stands for HyperText Markup Language. It is used on the
            frontend and gives the structure to the webpage which you can style
            using CSS and make interactive using JavaScript.
          </p>
          <div className="mt-10 mb-4 flex w-full items-center justify-between">
            <div className="controlls w-fit flex space-x-4">
              <Link
                to={"/quizzes"}
                className="back bg-slate-500 font-semibold text-sm rounded-lg flex items-center justify-center px-4 py-1.5"
              >
                <BsArrowLeft className="mr-3" /> All Quizzes
              </Link>
              <span className="share bg-yellow-500 font-semibold text-sm rounded-lg  flex items-center justify-center px-4 py-1.5">
                <BiShare className="mr-3" /> Share
              </span>
            </div>
            <span className="suggest bg-yellow-500 font-semibold text-sm rounded-lg  flex items-center justify-center px-4 py-1.5">
              <BiChat className="mr-3" /> Suggest Changes
            </span>
          </div>
          <div className="status w-full flex justify-between items-center border border-slate-500 rounded-xl p-1">
            <div className="w-fit">
              <span className="font-semibold text-xs px-3 py-1.5 bg-yellow-100 rounded-lg">
                0% Done
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                0 Completed
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                0 in Progress
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                0 Skipped
              </span>
              <span className="font-semibold text-xs px-3 py-1.5 rounded-lg">
                37 Total
              </span>
            </div>
            <div className="track w-fit">
              <span className="font-bold flex items-center justify-center text-xs px-3 py-1.5 rounded-lg">
                <BsQuestionCircleFill className="mr-2" /> Track Progess
              </span>
            </div>
          </div>
          <div className="w-full h-fit flex flex-col items-start space-y-2 border border-slate-500 rounded-xl p-3 mt-8">
            <div className="question-box w-full divide-y-2 divide-slate-500">
              <div className="w-full bg-red-300">
                <h3 className="w-full font-bold text-xl">
                  What does the abbreviation HTML stand for?
                </h3>
              </div>
              <div className="options w-full pt-5">
                <textarea
                  rows={"3"}
                  type="text"
                  name="answer"
                  id="answer"
                  placeholder="Type your answer here"
                  className="w-full p-3 rounded-lg border border-slate-500"
                />
              </div>
            </div>
            <div className="w-fit">
              <button
                // to="/quiz/1"
                className="font-semibold text-sm px-3 py-1.5 bg-cyan-700 rounded-lg flex items-center justify-center"
              >
                Next <BiChevronRight className=" text-2xl ml-3" />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex flex-col justify-between space-y-5 col-start-4 col-span-2">
          <div className="h-full px-4 py-5 rounded-xl bg-cyan-100 border border-slate-600">
            <h3 className="text-4xl font-bold">Resources</h3>
            <span className="h-[3px] w-16 bg-cyan-950 flex rounded-full mt-5 mb-8"></span>
          </div>
          <div className="px-4 py-8 rounded-xl bg-cyan-100 border border-slate-600">
            Results
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default QuizPage;

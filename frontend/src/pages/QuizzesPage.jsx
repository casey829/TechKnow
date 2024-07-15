import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { BiChevronRightSquare } from "react-icons/bi";
import icon2 from "../assets/imgs/sub3.jpg";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import { UserContext } from "../services/userContext";

function QuizzesPage() {
  const { topics, user } = useContext(UserContext);
  const navigate = useNavigate();

  if (!user?.access_token) {
    navigate("/login");
  }

  return (
    <Layout>
      {user?.access_token && (
        <section className="relative w-full h-fit py-20">
          <div className="w-full">
            <h2 className="font-bold tracking-tight text-7xl text-cyan-700 mb-5">
              This is your starting
              <br /> point, choose a topic to start.{" "}
            </h2>
            <span className="h-[8px] w-96 bg-cyan-700 flex rounded-full my-20"></span>
          </div>
          <div className="w-full grid grid-cols-3 gap-8 mt-12">
            {topics &&
              topics.map((topic) => (
                <Link
                  to={`/quizzes/${topic.name.split("/")[0].toLowerCase()}`}
                  key={topic.id}
                  className="bg-white flex flex-col space-y-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out"
                >
                  <div className="icon">
                    <img
                      src={topic.image_url ? topic.image_url : icon2}
                      alt={topic.name}
                      className="h-72 w-full"
                    />
                  </div>
                  <div className="space-y-5 px-8">
                    <h3 className="text-4xl font-bold">{topic.name}</h3>
                    <span className="h-[3px] w-40 rounded-full bg-cyan-900 flex"></span>
                    <p className="text-sm leading-tight">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quia, molestias vel? Vero, optio! Reprehenderit harum
                      eaque animi placeat illum fuga.
                    </p>
                    <h3 className="text-xl pt text-pink-600 font-semibold flex  items-center">
                      Discover your strengths{" "}
                      <BiChevronRightSquare className="ml-2" />
                    </h3>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default QuizzesPage;

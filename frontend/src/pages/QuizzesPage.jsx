import React from "react";
import { BiChevronRightSquare } from "react-icons/bi";

import icon1 from "../assets/imgs/sub1.jpg";
import icon2 from "../assets/imgs/sub3.jpg";
import icon3 from "../assets/imgs/sub4.jpg";
import icon4 from "../assets/imgs/sub5.png";
import icon5 from "../assets/imgs/sub6.jpg";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

function QuizzesPage() {
  return (
    <Layout>
      {" "}
      <section className="relative w-full h-fit py-20">
        <div className="w-full">
          <h2 className="font-bold tracking-tight text-8xl text-cyan-700 mb-5">
            This is your starting
            <br /> point, choose a topic to start.{" "}
          </h2>
          <span className="h-[8px] w-96 bg-cyan-700 flex rounded-full my-20"></span>
        </div>
        <div className="w-full grid grid-cols-3 gap-8 mt-12">
          {/* {subjects &&
          subjects.map((subject) => (
            <Link to={`/quizzes/${subject.id}`} key={subject.id}>
              <figure>
                <img
                  className="rounded-2xl h-80"
                  src={subject.image_url}
                  alt={subject.name}
                />
              </figure>
              <h3 className="font-bold text-3xl uppercase">{subject.name}</h3>
              <div className="divider w-full h-1 bg-green-950 rounded-3xl my-2"></div>
              <p className="text-sm font-semibold">{subject.description}</p>
            </Link>
          ))} */}
          <div className="bg-white flex flex-col space-y-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
            <div className="icon">
              <img src={icon1} alt="icon" className="h-72 w-full" />
            </div>
            <div className="space-y-5 px-8">
              <h3 className="text-4xl font-bold">Git/Github</h3>
              <span className="h-[3px] w-40 rounded-full bg-cyan-900 flex"></span>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                molestias vel? Vero, optio! Reprehenderit harum eaque animi
                placeat illum fuga. Vitae ipsam magnam dicta? Ipsam deserunt ea
                est numquam aut.
              </p>
              <Link
                to={"#"}
                className="text-xl pt text-pink-600 font-semibold flex  items-center"
              >
                Discover your strengths{" "}
                <BiChevronRightSquare className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="bg-white flex flex-col space-y-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
            <div className="icon">
              <img src={icon2} alt="icon" className="h-72 w-full" />
            </div>
            <div className="space-y-5 px-8">
              <h3 className="text-4xl font-bold">Html/CSS</h3>
              <span className="h-[3px] w-40 rounded-full bg-cyan-900 flex"></span>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                molestias vel? Vero, optio! Reprehenderit harum eaque animi
                placeat illum fuga. Vitae ipsam magnam dicta? Ipsam deserunt ea
                est numquam aut.
              </p>
              <Link
                to={"#"}
                className="text-xl pt text-pink-600 font-semibold flex  items-center"
              >
                Discover your strengths{" "}
                <BiChevronRightSquare className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="bg-white flex flex-col space-y-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
            <div className="icon">
              <img src={icon3} alt="icon" className="h-72 w-full" />
            </div>
            <div className="space-y-5 px-8">
              <h3 className="text-4xl font-bold">Javascript</h3>
              <span className="h-[3px] w-40 rounded-full bg-cyan-900 flex"></span>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                molestias vel? Vero, optio! Reprehenderit harum eaque animi
                placeat illum fuga. Vitae ipsam magnam dicta? Ipsam deserunt ea
                est numquam aut.
              </p>
              <Link
                to={"#"}
                className="text-xl pt text-pink-600 font-semibold flex  items-center"
              >
                Discover your strengths{" "}
                <BiChevronRightSquare className="ml-2" />
              </Link>
            </div>
          </div>{" "}
          <div className="bg-white flex flex-col space-y-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
            <div className="icon">
              <img src={icon3} alt="icon" className="h-72 w-full" />
            </div>
            <div className="space-y-5 px-8">
              <h3 className="text-4xl font-bold">React</h3>
              <span className="h-[3px] w-40 rounded-full bg-cyan-900 flex"></span>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                molestias vel? Vero, optio! Reprehenderit harum eaque animi
                placeat illum fuga. Vitae ipsam magnam dicta? Ipsam deserunt ea
                est numquam aut.
              </p>
              <Link
                to={"#"}
                className="text-xl pt text-pink-600 font-semibold flex  items-center"
              >
                Discover your strengths{" "}
                <BiChevronRightSquare className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="bg-white flex flex-col space-y-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
            <div className="icon">
              <img src={icon5} alt="icon" className="h-72 w-full" />
            </div>
            <div className="space-y-5 px-8">
              <h3 className="text-4xl font-bold">MongoDB</h3>
              <span className="h-[3px] w-40 rounded-full bg-cyan-900 flex"></span>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                molestias vel? Vero, optio! Reprehenderit harum eaque animi
                placeat illum fuga. Vitae ipsam magnam dicta? Ipsam deserunt ea
                est numquam aut.
              </p>
              <Link
                to={"#"}
                className="text-xl pt text-pink-600 font-semibold flex  items-center"
              >
                Discover your strengths{" "}
                <BiChevronRightSquare className="ml-2" />
              </Link>
            </div>
          </div>
          <div className="col-start-3 bg-white flex flex-col space-y-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
            <div className="icon">
              <img src={icon4} alt="icon" className="h-72 w-full" />
            </div>
            <div className="space-y-5 px-8">
              <h3 className="text-4xl font-bold">Node.js</h3>
              <span className="h-[3px] w-40 rounded-full bg-cyan-900 flex"></span>
              <p className="text-sm leading-tight">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
                molestias vel? Vero, optio! Reprehenderit harum eaque animi
                placeat illum fuga. Vitae ipsam magnam dicta? Ipsam deserunt ea
                est numquam aut.
              </p>
              <Link
                to={"#"}
                className="text-xl pt text-pink-600 font-semibold flex  items-center"
              >
                Discover your strengths{" "}
                <BiChevronRightSquare className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default QuizzesPage;

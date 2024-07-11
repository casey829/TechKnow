import React, { useContext, useEffect } from "react";
import { UserContext } from "../../services/userContext";
import { Link } from "react-router-dom";
import tpImg from "../../assets/imgs/animation.gif";
import icon1 from "../../assets/imgs/icons9.svg";
import icon2 from "../../assets/imgs/icon4.svg";
import icon3 from "../../assets/imgs/icon2.svg";
import { BiChevronRightSquare } from "react-icons/bi";

function Topics() {
  const { subjects } = useContext(UserContext);

  return (
    <section className="relative w-full h-fit py-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-t from-[#fff200] via-[#b5ac02] to-black">
      <div className="w-full">
        <h2 className="font-bold text-6xl text-cyan-300 mb-5">
          Our Proffessional Quizzes
        </h2>
        <span className="h-[3px] w-32 bg-cyan-400 flex rounded-full my-5"></span>
        <p className="text-sm font-semibold max-w-xl text-cyan-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          obcaecati? Cum id repellendus laborum aperiam cupiditate amet
          similique quo harum ut ratione, tempore magnam doloribus iste aliquid
          laboriosam pariatur porro.
        </p>
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
        <div className="bg-white flex flex-col space-y-8 px-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
          <div className="icon">
            <img src={icon1} alt="icon" />
          </div>
          <div className="space-y-5">
            <h3 className="text-4xl font-bold">Git/Github</h3>
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
              Discover your strengths <BiChevronRightSquare className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="translate-y-1/2 bg-white flex flex-col space-y-8 px-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-[calc(50%-4px)] duration-200 ease-out">
          <div className="icon">
            <img src={icon2} alt="icon" />
          </div>
          <div className="space-y-5">
            <h3 className="text-4xl font-bold">Html/CSS</h3>
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
              Discover your strengths <BiChevronRightSquare className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="bg-white flex flex-col space-y-8 px-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
          <div className="icon">
            <img src={icon3} alt="icon" />
          </div>
          <div className="space-y-5">
            <h3 className="text-4xl font-bold">Javascript</h3>
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
              Discover your strengths <BiChevronRightSquare className="ml-2" />
            </Link>
          </div>
        </div>{" "}
        <div className="bg-white flex flex-col space-y-8 px-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
          <div className="icon">
            <img src={icon3} alt="icon" />
          </div>
          <div className="space-y-5">
            <h3 className="text-4xl font-bold">React</h3>
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
              Discover your strengths <BiChevronRightSquare className="ml-2" />
            </Link>
          </div>
        </div>
        <div className="col-start-3 bg-white flex flex-col space-y-8 px-8 py-12 shadow-xl shadow-slate-600/50 drop-shadow-xl hover:shadow-slate-700 hover:translate-x-2 hover:translate-y-1 duration-200 ease-out">
          <div className="icon">
            <img src={icon1} alt="icon" />
          </div>
          <div className="space-y-5">
            <h3 className="text-4xl font-bold">Node.js</h3>
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
              Discover your strengths <BiChevronRightSquare className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Topics;

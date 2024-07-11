import React, { useContext, useEffect } from "react";
import { UserContext } from "../../services/userContext";
import { Link } from "react-router-dom";
import tpImg from "../../assets/imgs/animation.gif";

function Topics() {
  const { subjects } = useContext(UserContext);

  return (
    <section className="w-full py-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32 bg-gradient-to-t from-[#fff200] via-[#b5ac02] to-black">
      <div className="w-full">Topics</div>
      <div className="w-full grid grid-cols-3 gap-8">
        {subjects &&
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
          ))}
      </div>
    </section>
  );
}

export default Topics;

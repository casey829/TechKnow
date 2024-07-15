import React from "react";

function Banner() {
  return (
    <section className="w-full  relative z-20 h-[calc(100vh-120px)] bg-gradient-to-b from-black via-black/85 to-black">
      <div className="w-full text-teal-100 py-12 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <h1 className="heading-1 pb-4 text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-teal-600 to-teal-50">
          Hey there<span className="text-yellow-300">👋</span>, <br />
          ready{" "}
          <span className="font-extralight" style={{ fontStyle: "italic" }}>
            to improve your{" "}
            <span className="font-semibold" style={{ fontStyle: "normal" }}>
              knowledge
            </span>{" "}
            &amp;{" "}
          </span>
          <span className="font-semibold" style={{ fontStyle: "normal" }}>
            tech skill?
          </span>
        </h1>
        <p className="text-sm leading-tight max-w-md border-t border-white py-4 mt-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          repellat repudiandae voluptates sunt laborum. A blanditiis voluptatum
          cupiditate vero, illum consequuntur debitis dolore tempora aspernatur
          necessitatibus, dicta aut ducimus atque.
        </p>
      </div>
    </section>
  );
}

export default Banner;

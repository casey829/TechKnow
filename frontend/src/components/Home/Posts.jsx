import React from "react";

function Posts() {
  return (
    <section className="relative w-full h-full bg-[#fff200] z-20">
      <div className="svg px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <svg
          className="absolute z-40"
          width="1300"
          height="1024"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            x="-30"
            y="435"
            fill="none"
            // stroke="black"
            strokeWidth="2"
            className="text-[20.3rem] transform stroke-cyan-700/25"
          >
            Partners
          </text>
        </svg>
      </div>
      <div className="w-full ml-[42.3%] px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <h2 className="font-bold text-6xl text-cyan-700 mb-5">
          We are proud of <br />
          our Partners
        </h2>
        <span className="h-[3px] w-32 bg-cyan-700 flex rounded-full my-5"></span>
        <p className="text-sm font-semibold max-w-xl text-cyan-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
          obcaecati? Cum id repellendus laborum aperiam cupiditate amet
          similique quo harum ut ratione, tempore magnam doloribus iste aliquid
          laboriosam pariatur porro.
        </p>
      </div>
      <div className="w-full mt-52 pb-28 grid grid-cols-6 justify-items-center items-center gap-5 py-20 px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32">
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/BOC.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/TOG_new%201.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/Hornby%20Hobbies.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/Softcat.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/Layer-1.svg"
          alt="partner image"
        />
        <img src="https://www.rawnet.com/hubfs/Group.svg" alt="partner image" />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/Dignity_Logo.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/bottomline.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/redbull_mediahouse.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/Ascot.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/Lush.svg"
          alt="partner image"
        />
        <img
          src="https://www.rawnet.com/hubfs/Theme%20-%202023/Image/whistl.svg"
          alt="partner image"
        />
      </div>
    </section>
  );
}

export default Posts;

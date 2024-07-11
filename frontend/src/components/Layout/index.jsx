import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Index({ children, full = true }) {
  return (
    <>
      <Header />
      <main
        className={`w-full min-h-[calc(100vh-4rem)] ${
          full === true && "px-5 sm:px-10 md:px-16 lg:px-24 xl:px-32"
        } overflow-x-hidden`}
      >
        {children}
      </main>
      {/* <Footer /> */}
    </>
  );
}

export default Index;

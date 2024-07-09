import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Index({ children }) {
  return (
    <>
      <Header />
      <main className="px-5 sm:px-10 md:px-16 lg:px-24 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Index;

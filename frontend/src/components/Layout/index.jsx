import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Index({ children }) {
  return (
    <>
      <Header />
      <main className="px-24">{children}</main>
      <Footer />
    </>
  );
}

export default Index;

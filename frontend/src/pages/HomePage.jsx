import React from "react";
import Layout from "../components/Layout";
import Banner from "../components/Home/Banner";
import Topics from "../components/Home/Topics";
import Posts from "../components/Home/Posts";
import Subscribe from "../components/Home/Subscribe";
import PromoVideo from "../components/Home/PromoVideo";

function HomePage() {
  return (
    <Layout full={false}>
      <Banner />
      <PromoVideo />
      <Topics />
      <Posts />
      <Subscribe />
    </Layout>
  );
}

export default HomePage;

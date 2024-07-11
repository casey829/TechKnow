import React from "react";
import Layout from "../components/Layout";
import { useSearchParams } from "react-router-dom";

function QuizPage() {
  // use search param
  const searchParams = useSearchParams();
  console.log(searchParams);
  return <Layout>QuizPage</Layout>;
}

export default QuizPage;

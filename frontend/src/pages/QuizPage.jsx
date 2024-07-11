import React, { useContext } from "react";
import Layout from "../components/Layout";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserContext } from "../services/userContext";

function QuizPage() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };

  if (!user) {
    navigate("/login", { replace: true });
  }
  return <Layout>QuizPage</Layout>;
}

export default QuizPage;

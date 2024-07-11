import React, { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../services/userContext";

function ProfilePage() {
  const navigate = useNavigate();
  const { user, logout } = useContext(UserContext);

  const handleLogout = () => {
    logout();
    navigate("/", { replace: true });
  };
  useEffect(() => {
    console.log("USER:", user);
    if (!user) {
      navigate("/login", { replace: true });
    }
  }, [user]);
  return <Layout>ProfilePage</Layout>;
}

export default ProfilePage;

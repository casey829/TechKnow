import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [subjects, setSubjects] = useState(null);
  const [topics, setTopics] = useState(null);
  const [questions, setQuestions] = useState(null);

  const registerUser = async (userData) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      setUser(result.user);
      // alert("User registered successfully");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const loginUser = async (credentials) => {
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      // Store the tokens in localStorage
      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);

      // Optionally, store the user information if it's returned by the backend
      if (result.user) {
        localStorage.setItem("user", JSON.stringify(result.user));
      }

      setUser(result.user || result); // Depending on your backend response structure
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const fetchTopics = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/quiz/topics");
      const result = await response.json();
      setTopics(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchQuestions = async (topic) => {
    try {
      const response = await fetch(
        `http://localhost:5000/quiz/questions/${topic}`
      );
      const result = await response.json();
      setQuestions(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const login = (userData) => {
    localStorage.setItem("user_token", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user_token");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    fetchTopics();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        subjects,
        topics,
        registerUser,
        loginUser,
        fetchQuestions,
        questions,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

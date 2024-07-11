import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState("user_1");
  const [subjects, setSubjects] = useState(null);

  const fetchSubjects = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/subjects");
      const result = await response.json();
      setSubjects(result.subjects);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const login = (userData) => {
    localStorage.setItem("user_token", JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user_token");
    setUser(null);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user_token");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    fetchSubjects();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
        subjects,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

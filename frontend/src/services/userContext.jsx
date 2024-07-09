import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

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

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [topics, setTopics] = useState([]);
  const [resources, setResources] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [topicDetails, setTopicDetails] = useState(null);

  const registerUser = async (userData) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const result = await response.json();
      setUser(result.user);
      return result;
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const loginUser = async (credentials) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await response.json();

      if (result?.error) {
        return result;
      }

      localStorage.setItem("access_token", result.access_token);
      localStorage.setItem("refresh_token", result.refresh_token);

      setUser(result.user || result);
      return result;
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const fetchTopics = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/topics");
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching topics:", error);
      return [];
    }
  };

  const fetchResources = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/resources");
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching resources:", error);
      return [];
    }
  };

  const addResource = async (resource) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/resources", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(resource),
      });

      const result = await response.json();
      setResources([...resources, result]);
      return result;
    } catch (error) {
      console.error("Error adding resource:", error);
    }
  };

  const deleteResource = async (resourceId) => {
    try {
      await fetch(`http://127.0.0.1:5000/resources/${resourceId}`, {
        method: "DELETE",
      });

      setResources(resources.filter((r) => r.id !== resourceId));
    } catch (error) {
      console.error("Error deleting resource:", error);
    }
  };

  const fetchTopicDetails = async (topicName) => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/topics/${topicName}`);
      const result = await response.json();
      setTopicDetails(result);
      setQuestions(result.questions || []);
      setResources(result.resources || []);
    } catch (error) {
      console.error("Error fetching topic details:", error);
    }
  };

  const fetchResourceDetails = async (resourceId) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:5000/resources/${resourceId}`
      );
      const result = await response.json();
      setResources([result]);
    } catch (error) {
      console.error("Error fetching resource details:", error);
    }
  };

  const fetchUserDetails = async (token) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await response.json();
      setUser(result.user);
    } catch (error) {
      console.error("Error fetching user details:", error);
      logout();
    }
  };

  const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("user");
    setUser(null);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      fetchUserDetails(accessToken);
    } else {
      logout();
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [topicsResult, resourcesResult] = await Promise.all([
          fetchTopics(),
          fetchResources(),
        ]);
        setTopics(topicsResult);
        setResources(resourcesResult);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        logout,
        topics,
        resources,
        setResources,
        registerUser,
        loginUser,
        fetchTopicDetails,
        fetchResourceDetails,
        addResource,
        deleteResource,
        questions,
        topicDetails,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

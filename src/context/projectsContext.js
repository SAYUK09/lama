"use client";
import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext({
  projects: [],
  setProjects: () => [],
  loginToken: "",
  setLoginToken: () => "",
});

export const GlobalContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [loginToken, setLoginToken] = useState("");

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    setLoginToken(loginToken);
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BE_URL}/projects?` +
            new URLSearchParams({
              userId: loginToken,
            }),
          {
            method: "GET",
          }
        );

        const data = await response.json();

        setProjects([...data.projects]);
      } catch (error) {
        console.error("Login error:", error);
      }
    }
    loginToken && loginToken.length && fetchData();
  }, [loginToken]);

  return (
    <GlobalContext.Provider
      value={{ projects, setProjects, loginToken, setLoginToken }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);

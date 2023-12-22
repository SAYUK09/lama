"use client";
import React, { useState, useEffect } from "react";
import CreateProjectBtn from "./CreateProjectBtn";
import { useGlobalContext } from "@/context/projectsContext";

function ActionButton() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmailId] = useState("");

  const { loginToken, setLoginToken } = useGlobalContext();

  useEffect(() => {
    const loginToken = localStorage.getItem("loginToken");
    setLoginToken(loginToken);
  }, [isLoginPopupOpen]);

  const handleLogin = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BE_URL}/users`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });

      const data = await response.json();

      data._id && localStorage.setItem("loginToken", data._id);
      setIsLoginPopupOpen(false);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div>
      {loginToken ? (
        <div>
          <CreateProjectBtn />
        </div>
      ) : (
        <div>
          {!isLoginPopupOpen && (
            <button
              className="bg-secondary py-2 px-4 rounded-sm text-white flex justify-center items-center"
              type="button"
              onClick={() => setIsLoginPopupOpen(true)}
            >
              Sign up
            </button>
          )}
          {isLoginPopupOpen && (
            <div className="flex flex-col fixed inset-0 items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="flex flex-col items-center">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary my-2"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmailId(e.target.value)}
                  placeholder="Email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary"
                />
                <button
                  className="bg-primary py-2 px-4 rounded-sm text-white my-2 text-center"
                  type="button"
                  onClick={handleLogin}
                >
                  Sign in
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ActionButton;

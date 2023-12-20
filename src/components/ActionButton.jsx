"use client";
import React, { useState, useEffect } from "react";
import plusbtn from "../../public/assests/plus.svg";
import Image from "next/image";

function ActionButton() {
  const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);
  const [isProjectPopupOpen, setIsProjectPopupOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmailId] = useState("");
  const [loginToken, setLoginToken] = useState("");
  const [projectName, setProjectName] = useState("");

  const openProjectPopup = () => {
    setIsProjectPopupOpen(true);
  };

  const closeProjectPopup = () => {
    setIsProjectPopupOpen(false);
  };

  const createProject = () => {
    console.log(projectName, "projectName");
  };

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
      {!loginToken ? (
        <div className="flex flex-col justify-center my-8">
          <button type="button" onClick={() => setIsLoginPopupOpen(true)}>
            Login
          </button>
          {isLoginPopupOpen && (
            <div className="login-popup">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmailId(e.target.value)}
                placeholder="Email"
              />
              <button type="button" onClick={handleLogin}>
                Login
              </button>
            </div>
          )}
        </div>
      ) : (
        <div>
          <button
            className="bg-secondary py-2 px-4 rounded-sm text-white flex justify-center items-center"
            onClick={openProjectPopup}
            type="button"
          >
            <Image src={plusbtn} width={30} height={30} alt="button"></Image>
            <p className="px-2 text-lg">Create New Project</p>
          </button>
          {isProjectPopupOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-4">Create Project</h2>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-1">
                    Enter Project Name
                  </label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={closeProjectPopup}
                    className="mr-2 px-4 py-2 text-sm text-gray-500 hover:text-gray-700 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={createProject}
                    className="bg-secondary text-white px-4 py-2 rounded-md hover:bg-opacity-80 focus:outline-none focus:ring focus:border-secondary"
                  >
                    Create
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ActionButton;

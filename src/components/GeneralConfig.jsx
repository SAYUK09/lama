"use client";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";

function GeneralConfig() {
  const params = useParams();
  const [disabled, setDisabled] = useState(true);

  const [chatbotName, setChatbotName] = useState("");
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [inputPlaceholder, setInputPlaceholder] = useState("");

  async function updateProject() {

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BE_URL}/project/general?` +
        new URLSearchParams({
          projectId: params.id,
        }),
      {
        method: "PATCH",
        body: JSON.stringify({
          chatbotName: chatbotName,
          welcomeMessage: welcomeMessage,
          inputPlaceholder: inputPlaceholder,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();

    data.status === 200 && setDisabled(true);
  }

  return (
    <div className="flex flex-col gap-4 py-4">
      <div>
        <div className="flex flex-col">
          <label className="font-semibold">Chatbot Name</label>
          <input
            value={chatbotName}
            onChange={(e) => {
              setChatbotName(e.target.value);
              setDisabled(false);
            }}
            className="border border-slate-500 focus:outline-none rounded-md py-1 px-2"
            type="text"
          />
          <p className="text-sm text-slate-500">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Welcome Message</label>
        <input
          value={welcomeMessage}
          onChange={(e) => {
            setWelcomeMessage(e.target.value);
            setDisabled(false);
          }}
          className="border border-slate-500 focus:outline-none rounded-md py-1 px-2"
          type="text"
        />
        <p className="text-sm text-slate-500">
          Lorem ipsuim dolor sit Lorem ipsuim dolor sit
        </p>
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Input Placeholder</label>
        <input
          value={inputPlaceholder}
          onChange={(e) => {
            setInputPlaceholder(e.target.value);
            setDisabled(false);
          }}
          className="border border-slate-500 focus:outline-none rounded-md py-1 px-2"
          type="text"
        />
        <p className="text-sm text-slate-500">
          Lorem ipsuim dolor sit Lorem ipsuim dolor sit
        </p>
      </div>

      <div className="my-4">
        <button
          disabled={disabled}
          className={`bg-primary px-4 py-1 rounded-md text-white hover:bg-secondary-400 ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={updateProject}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}

export default GeneralConfig;

"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import editIcon from "../../public/assests/mode.svg";
import Image from "next/image";

function EpisodeComponent() {
  const params = useParams();

  const [disabled, setDisabled] = useState(true);
  const [transcript, setTranscript] = useState("");
  const [descriptionObj, setDescriptionObj] = useState({});

  async function fetchData() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BE_URL}/transcription?` +
          new URLSearchParams({
            descriptionId: params.episodeId,
          }),
        {
          method: "GET",
        }
      );

      const data = await response.json();
      data && setTranscript(data.description.description);
      data && setDescriptionObj(data.description);
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  async function updateDescription() {
    console.log({ ...descriptionObj, description: transcript }, "dop");
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BE_URL}/transcription?` +
        new URLSearchParams({
          descriptionId: params.episodeId,
        }),
      {
        method: "PATCH",
        body: JSON.stringify({ ...descriptionObj, description: transcript }),
        headers: { "Content-Type": "application/json" }, // Add this header
      }
    );
    const data = await response.json();
    data && setDisabled(true);
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-primary text-3xl font-bold">Edit Transcription</h3>

        {!disabled && (
          <div className="flex gap-2">
            <button
              onClick={() => {
                fetchData();
                setDisabled(true);
              }}
              className="border border-red-500 text-red-500 px-2 py-1 rounded-md font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
            >
              Discard
            </button>
            <button
              onClick={updateDescription}
              className="bg-black text-white px-2 py-1 rounded-md hover:shadow-lg"
            >
              Save & Exit
            </button>
          </div>
        )}
      </div>
      <div className="border-solid border border-slate-900 rounded-md p-2 my-4">
        <button
          onClick={() => {
            setDisabled(!disabled);
          }}
          className="flex bg-slate-800 p-1 text-white rounded-full px-4"
        >
          <Image src={editIcon} width={20} height={20} alt="edit icon" />
          <p className="mx-2">Edit Mode</p>
        </button>
        <div className="p-2">
          <textarea
            className="w-full p-2 rounded-sm"
            disabled={disabled}
            name="transcript"
            cols="30"
            rows="10"
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default EpisodeComponent;

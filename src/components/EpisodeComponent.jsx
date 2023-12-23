"use client";
import { useGlobalContext } from "@/context/globalContext";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import editIcon from "../../public/assests/mode.svg";
import Image from "next/image";

function EpisodeComponent() {
  const params = useParams();
  const { projects } = useGlobalContext();

  const [disabled, setDisabled] = useState(true);
  const [transcript, setTranscript] = useState("");

  const activeProject = projects.filter((item) => item._id === params.id)[0];

  useEffect(() => {
    const activeDescription =
      activeProject &&
      activeProject.descriptions.filter(
        (item) => item._id === params.episodeId
      )[0];

    activeDescription && setTranscript(activeDescription.description);
  }, [activeProject]);

  const activeDescription =
    activeProject &&
    activeProject.descriptions.filter(
      (item) => item._id === params.episodeId
    )[0];

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3 className="text-primary text-3xl font-bold">Edit Transcription</h3>

        {!disabled && (
          <div className="flex gap-2">
            <button
              onClick={() => {}}
              className="border border-red-500 text-red-500 px-2 py-1 rounded-md font-semibold hover:bg-red-500 hover:text-white transition-all duration-300 ease-in-out"
            >
              Discard
            </button>
            <button
            //   onClick={}
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
      EpisodeComponent
    </div>
  );
}

export default EpisodeComponent;

"use client";
import React, { useState } from "react";
import UploadEpisodeModel from "./UploadEpisodeModel";
import logo from "../../public/assests/directright.svg";
import cloudUpload from "../../public/assests/cloud_upload.svg";
import Image from "next/image";

function Dropbox() {
  const [isModelOpen, setIsModelOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 justify-center items-center border-dashed border border-slate-700 rounded-xl mt-2 mb-4 p-4">
      <Image src={cloudUpload} height={100} width={100} alt="cloud upload" />
      <div className="text-center">
        <p>
          Select a file or drag and drop here (Podcast Media or Transcription
          Text)
        </p>
        <p className="text-sm text-slate-400">
          MP4, MOV, MP3, WAV, PDF, DOCX or TXT file{" "}
        </p>
      </div>
      <button
        onClick={() => setIsModelOpen(true)}
        className="border border-violet-800 text-violet-800 rounded-full py-2 px-4 font-bold hover:bg-violet-800 hover:text-white transition-all duration-200 ease-in-out"
      >
        Select File
      </button>

      {isModelOpen && (
        <UploadEpisodeModel
          img={logo}
          source={"dropbox"}
          handleModelState={setIsModelOpen}
        />
      )}
    </div>
  );
}

export default Dropbox;

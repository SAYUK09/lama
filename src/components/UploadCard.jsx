"use client";
import Image from "next/image";
import React, { useState } from "react";
import UploadEpisodeModel from "./UploadEpisodeModel";

function UploadCard({ img, source }) {
  const [isModelOpen, setIsModelOpen] = useState(false);
  return (
    <div>
      <div
        onClick={() => setIsModelOpen(true)}
        className="flex border border-solid border-gray-500 rounded-md p-4 shadow-lg shadow-gray items-center "
      >
        <div>
          <Image src={img} height={80} width={80} alt={"icon"} />
        </div>
        <div className="flex flex-col font-bold text-gray-800 mx-4">
          <p className="">Upload</p>
          <p>{source}</p>
        </div>
      </div>
      {isModelOpen && (
        <UploadEpisodeModel
          img={img}
          source={source}
          handleModelState={setIsModelOpen}
        />
      )}
    </div>
  );
}

export default UploadCard;

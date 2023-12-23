"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { useGlobalContext } from "@/context/globalContext";

function UploadEpisodeModel({ img, source, handleModelState }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const { setProjects } = useGlobalContext();

  const params = useParams();

  const { loginToken } = useGlobalContext();

  async function uploadDescription() {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BE_URL}/descriptions`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name,
            description: description,
            projectId: params.id,
            userId: loginToken,
          }),
        }
      );

      const data = await response.json();
      setProjects([...data]);
      data && handleModelState(false);
    } catch (error) {
      console.error("Login error:", error);
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
      <div className=" bg-white p-8 rounded-lg shadow-lg items-center">
        <div className="flex justify-around  text-lg font-bold text-gray-800">
          <div className="flex justify-center items-center">
            <Image src={img} height={50} width={50} alt={"model icon"} />
            <p>{`Upload from ${source}`}</p>
          </div>
          <div
            onClick={() => handleModelState(false)}
            className="flex items-center mx-4 "
          >
            <p>X</p>
          </div>
        </div>
        <div className="my-4">
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-1">
              Description
            </label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-secondary"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            onClick={uploadDescription}
            className=" bg-secondary text-white font-md p-2 px-4 rounded-md"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadEpisodeModel;

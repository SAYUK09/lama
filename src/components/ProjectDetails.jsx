"use client";
import { useParams } from "next/navigation";
import youtubeIcon from "../../public/assests/yt.svg";
import spotifyIcon from "../../public/assests/spotify.svg";
import blankSpot from "../../public/assests/spot.svg";
import rssIcon from "../../public/assests/rss.svg";
import React from "react";
import UploadCard from "./UploadCard";
import Link from "next/link";
import Dropbox from "./Dropbox";
import { useGlobalContext } from "@/context/globalContext";

function ProjectComponent() {
  const { projects } = useGlobalContext();
  const params = useParams();

  const activeProject = projects.filter((item) => item._id === params.id)[0];

  function formatTimestamp(timestamp) {
    const dt = new Date(timestamp);

    const monthAbbr = dt.toLocaleString("default", { month: "short" });
    const day = dt.getDate();
    const year = dt.getFullYear() % 100;
    const time = dt.toLocaleTimeString("default", { hour12: false });

    return `${monthAbbr} ${day} ${year} | ${time}`;
  }

  return (
    <div>
      {activeProject &&
      activeProject.descriptions &&
      activeProject.descriptions.length ? (
        <div>
          <div className="mb-8">
            <h1 className="text-primary text-3xl font-bold">
              {activeProject.name}
            </h1>
          </div>

          <div className="grid grid-cols-3 gap-x-16 gap-y-6">
            <UploadCard img={youtubeIcon} source={"Youtube Video"} />
            <UploadCard img={spotifyIcon} source={"Spotify Podcast"} />
            <UploadCard img={blankSpot} source={"Text File"} />
          </div>

          <div className="bg-primary rounded-md text-white p-2 px-8 my-8 font-bold">
            <div className="flex justify-between items-center">
              <p>All files are processed! Your widget is ready to go!</p>

              <button className="px-4 py-2 rounded-md bg-white text-black">
                Try it out!
              </button>
            </div>
          </div>

          <div className="my-4 shadow-md shadow-gray-800  border rounded-lg border-gray-500">
            <div className="grid grid-cols-4 justify-center items-center auto-rows-auto p-2 ">
              <div className="p-4 font-semibold">Name</div>
              <div className="p-4 font-semibold">Upload Date & Time</div>
              <div className="p-4 font-semibold">Status</div>
              <div className="p-4 font-semibold">Actions</div>
              {activeProject.descriptions?.map((episode) => {
                return (
                  <>
                    <div className={`border-y border-slate-300 p-4`}>
                      <span className=" p-2">{episode.title}</span>
                    </div>
                    <div className=" border-y border-slate-300 p-4">
                      <span className="border p-2">
                        {formatTimestamp(episode.updatedAt)}
                      </span>
                    </div>
                    <div className=" border-y border-slate-300 p-4">
                      <span className="border p-2">Done</span>
                    </div>
                    <div className={` border-y border-slate-300 p-4 `}>
                      <Link
                        href={`episodes/${episode._id}/transcript`}
                        className="border rounded-l-lg border-slate-400 p-2"
                      >
                        Edit
                      </Link>
                      <span
                        onClick={() => handleDeleteEpisode(episode._id)}
                        className="border-y cursor-pointer border-r rounded-r-lg text-red-500 border-slate-400 p-2 hover:bg-red-500 hover:text-white transition-all duration-200 ease-in-out"
                      >
                        Delete
                      </span>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-3 gap-x-16 gap-y-6">
            <UploadCard img={youtubeIcon} source={"Youtube Video"} />
            <UploadCard img={spotifyIcon} source={"Spotify Podcast"} />
            <UploadCard img={rssIcon} source={"Spotify Feed"} />
            <UploadCard img={youtubeIcon} source={"Youtube Video"} />
            <UploadCard img={spotifyIcon} source={"Spotify Podcast"} />
            <UploadCard img={rssIcon} source={"Spotify Feed"} />
          </div>
          <div className="my-8 flex items-center justify-center">
            <p>Or</p>
          </div>
          <div>
            <Dropbox />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectComponent;

import UploadCard from "@/components/UploadCard";
import React from "react";
import youtubeIcon from "../../../../public/assests/yt.svg";
import rssIcon from "../../../../public/assests/rss.svg";
import spotifyIcon from "../../../../public/assests/spotify.svg";
import Dropbox from "@/components/Dropbox";

function ProjectDetails({ params }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center ">
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
    </main>
  );
}

export default ProjectDetails;

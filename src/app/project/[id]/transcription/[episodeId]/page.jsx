import EpisodeComponent from "@/components/EpisodeComponent";
import React from "react";

function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center ">
        <EpisodeComponent />
      </div>
    </main>
  );
}

export default page;

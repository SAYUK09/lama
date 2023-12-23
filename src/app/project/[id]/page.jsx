import React from "react";
import ProjectComponent from "@/components/ProjectDetails";

function ProjectDetails() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center ">
        <ProjectComponent />
      </div>
    </main>
  );
}

export default ProjectDetails;

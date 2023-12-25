import React from "react";
import ProjectComponent from "@/components/ProjectDetails";

function ProjectDetails() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="z-10 w-full items-center justify-center ">
        <ProjectComponent />
      </div>
    </main>
  );
}

export default ProjectDetails;

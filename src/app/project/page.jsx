import ProjectList from "@/components/ProjectList";
import React from "react";

function ProjectPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-6xl w-full items-center justify-center ">
        <ProjectList />
      </div>
    </main>
  );
}

export default ProjectPage;

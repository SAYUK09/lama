import Sidebar from "@/components/Sidebar";
import React from "react";

function ProjectPageLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex">
          <div className="w-full">{children} </div>
        </main>
      </body>
    </html>
  );
}

export default ProjectPageLayout;

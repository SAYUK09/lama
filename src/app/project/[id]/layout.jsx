import React from "react";

function ProjectPageLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="flex">
          <div className="flex flex-col p-8 w-1/4">
            <p>Project Upload Flow</p>

            <div className="my-4 text-base">
              <div className="items-center rounded-full bg-primary flex p-2 text-white ">
                <div className="rounded-full bg-secondary p-2 w-8 h-8 flex items-center justify-center">
                  <p>1</p>
                </div>
                <p className="mx-4">Project</p>
              </div>
            </div>
          </div>
          <div className="w-full">{children} </div>
        </main>
      </body>
    </html>
  );
}

export default ProjectPageLayout;

"use client";
import Breadcrumbs from "@/components/Breadcrumbs";
import Sidebar from "@/components/Sidebar";
import { useGlobalContext } from "@/context/globalContext";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";

function WidgetPage() {
  const { projects } = useGlobalContext();

  const [configurationState, setConfigurationState] = useState("General");

  const params = useParams();
  const pathname = usePathname();

  const activeProject = projects?.filter((item) => item._id === params.id)[0];

  function extractProjectPath() {
    const index = pathname.lastIndexOf("/widget");
    if (index !== -1) {
      return pathname.substring(0, index);
    } else {
      return pathname;
    }
  }

  const sidebarItems = [
    {
      name: "Project",
      href: extractProjectPath(),
      isActive: false,
    },
    {
      name: "Widget Configuration",
      href: pathname,
      isActive: true,
    },
  ];

  const breadcrumbs = [
    { title: activeProject?.name, href: `/project/${params.id}` },
    { title: "Widget Configuration", href: { pathname } },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div className="z-10  w-full items-center justify-center ">
        <div className="flex">
          <Sidebar sidebarItems={sidebarItems} />

          <div className=" w-3/4 justify-center items-center mx-24">
            <div className="mb-8">
              <Breadcrumbs items={breadcrumbs} />
            </div>

            <div className="mb-8">
              <h1 className="text-primary text-3xl font-bold">
                Congfiguration
              </h1>
            </div>

            <div className="flex text-lg flex-col gap-4 border-b border-slate-500">
              <div className="flex gap-8">
                <div
                  onClick={() => setConfigurationState("General")}
                  className={`border-b-4 font-semibold ${
                    configurationState == "General" &&
                    "border-primary text-primary"
                  }`}
                >
                  General
                </div>

                <div
                  onClick={() => setConfigurationState("Display")}
                  className={`border-b-4 font-semibold ${
                    configurationState == "Display" &&
                    "border-primary text-primary"
                  }`}
                >
                  Display
                </div>
              </div>
            </div>

            {configurationState == "General" && (
              <div className="p-4">
                <div>
                  <div className="flex flex-col">
                    <label className="font-semibold">Chatbot Name</label>
                    <input
                      className="border border-slate-500 focus:outline-none rounded-md py-1 px-2"
                      type="text"
                    />
                    <p className="text-sm text-slate-500">
                      Lorem ipsuim dolor sit Lorem ipsuim dolor sit
                    </p>
                  </div>
                </div>
              </div>
            )}

            {configurationState == "Display" && <div>Display</div>}
          </div>
        </div>
      </div>
    </main>
  );
}

export default WidgetPage;

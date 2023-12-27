import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { Checkbox } from "@mantine/core";
import { useParams } from "next/navigation";

function DisplayConfig({ project }) {
  const params = useParams();

  const [displayConfig, setDisplayConfig] = useState(project.display);
  const [disabled, setDisabled] = useState(true);

  const positionOptions = [
    "bottom right",
    "top right",
    "bottom left",
    "top left",
  ];

  async function updateProject() {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BE_URL}/project/display?` +
        new URLSearchParams({
          projectId: params.id,
        }),
      {
        method: "PATCH",
        body: JSON.stringify({
          ...displayConfig,
        }),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();

    data.status === 200 && setDisabled(true);
  }

  return (
    <div>
      <div className="grid grid-cols-2 gap-x-20 gap-y-10 border-b-2 pb-12 border-slate-300 py-4">
        <div className="flex flex-col gap-2">
          <span className="font-semibold">Primary color</span>
          <div className="flex w-full gap-3">
            <input
              type="text"
              value={displayConfig.primaryColor}
              onChange={(e) =>
                setDisplayConfig((obj) => {
                  setDisabled(false);
                  return { ...obj, primaryColor: e.target.value };
                })
              }
              className="focus:outline-none border border-slate-400 rounded-md w-full px-2"
            />
            <div
              style={{ backgroundColor: displayConfig.primaryColor }}
              className="py-2 px-3 rounded-md border border-slate-500"
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">Font color</span>
          <div className="flex w-full gap-3">
            <input
              type="text"
              value={displayConfig.fontColor}
              onChange={(e) => {
                setDisabled(false);
                setDisplayConfig((obj) => {
                  return { ...obj, fontColor: e.target.event };
                });
              }}
              className="focus:outline-none border border-slate-400 rounded-md w-full px-2"
            />
            <div
              style={{ backgroundColor: displayConfig.fontColor }}
              className="py-2 px-3 rounded-md  border border-slate-500"
            ></div>
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">Font Size</span>
          <div className="flex w-full gap-3">
            <input
              type="text"
              value={displayConfig.fontSize}
              onChange={(e) => {
                setDisabled(false);
                setDisplayConfig((newDisplayConfig) => {
                  return { ...newDisplayConfig, fontSize: e.target.value };
                });
              }}
              className="focus:outline-none border border-slate-400 rounded-md w-full px-2"
            />
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="font-semibold">Chat Height </span>
          <div className="flex w-full gap-3">
            <input
              type="text"
              value={displayConfig.chatHeight}
              onChange={(e) => {
                setDisabled(false);
                setDisplayConfig((newDisplayConfig) => {
                  return { ...newDisplayConfig, chatHeight: e.target.value };
                });
              }}
              className="focus:outline-none border border-slate-400 rounded-md w-full px-2"
            />
          </div>
          <p className="text-sm text-slate-500">
            Lorem ipsuim dolor sit Lorem ipsuim dolor sit
          </p>
        </div>

        <div className=" flex justify-between items-center col-span-2">
          <div>
            <span className="font-semibold">Show Sources</span>
            <p className="text-sm text-slate-500">
              Lorem ipsuim dolor sit Lorem ipsuim dolor sit
            </p>
          </div>
          <div>
            <Checkbox
              checked={displayConfig.showSources}
              onChange={(e) => {
                setDisplayConfig((newDisplayConfig) => {
                  return { ...newDisplayConfig, showSources: e.target.value };
                });
              }}
            />
          </div>
        </div>
      </div>
      <div className="py-6">
        <span className="text-violet-700 font-semibold">Chat Icon</span>
        <div className="grid grid-cols-2 py-4 gap-x-20 gap-y-10">
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Chat Icon Size</span>
            <div className="flex w-full gap-3">
              <input
                type="text"
                value={displayConfig.chatIconSize}
                onChange={(e) => {
                  setDisabled(false);
                  setDisplayConfig((newDisplayConfig) => {
                    return {
                      ...newDisplayConfig,
                      chatIconSize: e.target.value,
                    };
                  });
                }}
                className="focus:outline-none border border-slate-400 rounded-md w-full px-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Position on Screen </span>
            <div className="flex w-full gap-3">
              <Dropdown
                optionsList={positionOptions}
                displayConfig={displayConfig}
                setDisplayConfig={setDisplayConfig}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Distance from Bottom</span>
            <div className="flex w-full gap-3">
              <input
                type="text"
                value={displayConfig.distanceFromBottom}
                onChange={(e) => {
                  setDisabled(false);
                  setDisplayConfig((newDisplayConfig) => {
                    return {
                      ...newDisplayConfig,
                      distanceFromBottom: e.target.value,
                    };
                  });
                }}
                className="focus:outline-none border border-slate-400 rounded-md w-full px-2"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-semibold">Horizontal Distance</span>
            <div className="flex w-full gap-3">
              <input
                type="text"
                value={displayConfig.horizontalDistance}
                onChange={(e) => {
                  setDisabled(false);
                  setDisplayConfig((newDisplayConfig) => {
                    return {
                      ...newDisplayConfig,
                      horizontalDistance: e.target.value,
                    };
                  });
                }}
                className="focus:outline-none border border-slate-400 rounded-md w-full px-2"
              />
            </div>
          </div>

          <div className="my-4">
            <button
              disabled={disabled}
              className={`bg-primary px-4 py-1 rounded-md text-white hover:bg-secondary-400 ${
                disabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={updateProject}
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayConfig;

import Link from "next/link";
import React from "react";

function Sidebar({ sidebarItems }) {
  return (
    <div className="flex flex-col pr-10 w-1/4">
      <p>Project Upload Flow</p>

      <div className="my-4 text-base ">
        {sidebarItems.map((item, index) => {
          return (
            <Link href={item.href} key={index}>
              <div
                className={`flex gap-2 text-sm items-center p-2 rounded-full font-medium ${
                  item.isActive ? "bg-primary text-white" : ""
                }`}
              >
                <div className="rounded-full bg-secondary p-2 w-8 h-8 flex items-center justify-center text-white">
                  <p>{index + 1}</p>
                </div>
                <p className="mx-4">{item.name}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;

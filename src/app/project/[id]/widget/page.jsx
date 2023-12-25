"use client";
import Sidebar from "@/components/Sidebar";
import { usePathname } from "next/navigation";
import React from "react";

function WidgetPage() {
  const pathname = usePathname();

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

  return (
    <div>
      <Sidebar sidebarItems={sidebarItems} />
    </div>
  );
}

export default WidgetPage;

import React from "react";
import CreateProjectBtn from "./CreateProjectBtn";
import Link from "next/link";

function ProjectList({ projects }) {
  function getTimeAgoStatus(timestamp) {
    const currentDate = new Date();
    const inputDate = new Date(timestamp);

    const timeDifference = currentDate - inputDate;
    const seconds = Math.floor(timeDifference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);

    if (seconds < 60) {
      return `${seconds} ${seconds === 1 ? "second" : "seconds"} ago`;
    } else if (minutes < 60) {
      return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
    } else if (hours < 24) {
      return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
    } else if (days < 7) {
      return `${days} ${days === 1 ? "day" : "days"} ago`;
    } else {
      return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
    }
  }

  function getInitials(name) {
    const words = name.split(" ");
    const firstTwoWords = words.slice(0, 2);
    const initials = firstTwoWords.map((word) => word.charAt(0));

    return initials.join("").toUpperCase();
  }

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-primary font-bold text-3xl">Projects</h1>
        <CreateProjectBtn />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
        {projects.map((project) => {
          return (
            <Link key={project._id} href={`/project/${project._id}`}>
              <div
                key={project._id}
                className="flex p-2 rounded-xl items-center  drop-shadow-lg border  border-solid border-gray-800  "
              >
                <div className="">
                  <div className="relative inline-flex items-center justify-center w-28 h-28 overflow-hidden bg-gray-100 rounded-md dark:bg-secondary">
                    <span className="font-bold text-white text-3xl ">
                      {getInitials(project.name)}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col justify-between p-2">
                  <div className="mb-2">
                    <p className="text-primary font-bold text-lg">
                      {project.name}
                    </p>
                    <div>{`${project.descriptions.length} Episodes`}</div>
                  </div>

                  <p className="text-gray-500">{`last edited ${getTimeAgoStatus(
                    project.updatedAt
                  )}`}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectList;

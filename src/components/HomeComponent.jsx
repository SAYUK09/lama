"use client";
import React from "react";
import Image from "next/image";
import heroImg from "../../public/assests/hero.svg";
import ActionButton from "@/components/ActionButton";
import ProjectList from "./ProjectList";
import { useGlobalContext } from "@/context/globalContext";

function HomeComponent() {
  const { projects } = useGlobalContext();

  return (
    <div>
      {!projects.length ? (
        <div>
          <h3 className="text-3xl text-center font-bold text-primary ">
            Create a New Project
          </h3>
          <div className="p-4 my-4 flex items-center justify-center">
            <Image src={heroImg} width={500} height={500}></Image>
          </div>
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            corporis voluptatibus vel, iste molestias, maxime quaerat reiciendis
            earum suscipit ipsam recusandae quod debitis atque sunt velit magni
            ipsum? Voluptatibus, quae!
          </p>
          <div className="flex justify-center my-8">
            <ActionButton />
          </div>
        </div>
      ) : (
        <ProjectList projects={projects} />
      )}
    </div>
  );
}

export default HomeComponent;

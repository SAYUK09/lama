import React from "react";
import HomeIcon from "../../public/assests/home.svg";
import Image from "next/image";
import Link from "next/link";

const Breadcrumbs = ({ items }) => {
  return (
    <nav className="flex items-center space-x-4">
      <Link href={"/"}>
        <Image src={HomeIcon} height={30} width={30} alt="Home Icon" />
      </Link>

      {items.map((item, index) => (
        <div key={index} className="text-xl text-gray-800 font-medium">
          <span className="mr-4">/</span>
          <Link
            href={item.href}
            className={` hover:text-gray-500 ${
              index === items.length - 1 ? "text-primary " : ""
            }`}
          >
            {item.title}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;

import Image from "next/image";
import heroImg from "../../public/assests/hero.svg";
import ActionButton from "@/components/ActionButton";
import HomeComponent from "@/components/HomeComponent";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center ">
        <HomeComponent />
      </div>
    </main>
  );
}

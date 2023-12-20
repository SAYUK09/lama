import Image from "next/image";
import heroImg from "../../public/assests/hero.svg";
import ActionButton from "@/components/ActionButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center ">
        <h3 className="text-3xl text-center font-bold text-primary ">
          Create a New Project
        </h3>

        <div className="p-4 my-4 flex items-center justify-center">
          <Image src={heroImg} width={500} height={500}></Image>
        </div>
        <p>
          {" "}
          <p className="text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            corporis voluptatibus vel, iste molestias, maxime quaerat reiciendis
            earum suscipit ipsam recusandae quod debitis atque sunt velit magni
            ipsum? Voluptatibus, quae!
          </p>
        </p>
        <div className="flex justify-center my-8">
          <ActionButton />
        </div>
      </div>
    </main>
  );
}

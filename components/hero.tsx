import Image from "next/image";
import TempleTimeStatus from "./temple-time-status";

const Hero = () => {
  return (
    <>
      <div className="relative w-full h-[250px] lg:h-screen">
        <Image
          src={"/images/jagannath_deity.jpg"}
          className="object-cover md:object-cover object-top w-full h-full "
          fill={true}
          alt={"lord jagannath vigraha"}
        ></Image>

        <div className="hidden absolute w-full bg-gradient-to-b from-transparent to-black h-[200px] md:h-[500px] z-10 bottom-0 md:flex flex-col gap-2 justify-center items-center">
          <p className="text-white text-2xl md:text-4xl">Welcome to</p>
          <h1 className="text-yellow-300 text-2xl md:text-6xl font-bold">
            Sri Sri Jagannath Temple, Asansol
          </h1>
          <p className="font-light text-xl text-yellow-100">
            Founder Acharya: His Divine Grace A.C. Bhaktivedanta Swami
            Prabhupāda
          </p>
        </div>
      </div>
      <div className="md:hidden bg-orange-800 flex flex-col justify-center items-center text-center py-4">
        <p className="text-white text-2xl md:text-4xl">Welcome to</p>
        <h1 className="text-yellow-300 md:text-6xl font-bold">
          Sri Sri Jagannath Temple, Asansol
        </h1>
        <p className="font-light text-xl text-white">
          Founder Acharya: His Divine Grace A.C. Bhaktivedanta Swami Prabhupāda
        </p>
      </div>
    </>
  );
};

export default Hero;

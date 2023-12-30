import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <header className="sm:p-16 py-16 px-8 flex justify-center lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0 min-h-[100vh] ">
      <div className="fixed top-0 left-0 w-full min-h-[100vh] bg-black/30 z-20"></div>
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 z-10 min-w-full min-h-full object-cover"
      >
        <source src="/bg_video.mp4" type="video/mp4" />
      </video>

      <div className="flex-1 flex flex-col gap-10 z-20">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          The <span className="red-gradient">Best</span> and{" "}
          <span className="red-gradient">Newest</span> movies are here
        </h1>
        <Link
          href={"#movies"}
          className="max-w-[200px] p-3 bg-rose-500 flex justify-center items-center rounded-xl"
        >
          Get movies
        </Link>
      </div>

      <div className="lg:flex-1 relative w-full h-[50vh] justify-center z-20">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;

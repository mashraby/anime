import Image from "next/image";

import { MotionDiv } from "./MotionDiv";
import { IMG_PATH } from "@/constants";
import BlurImage from "./BlurImage";
import Link from "next/link";

export interface MovieProp {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: Date;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface Prop {
  movie: MovieProp;
  index: number;
}

function MovieCard({ movie, index }: Prop) {
  const variants = {
    hidden: { opacity: 0 },
    vissible: { opacity: 1 },
  };

  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="vissible"
      transition={{
        delay: index * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="max-w-sm rounded relative w-full backdrop-blur-xl"
    >
      <div className="relative w-full h-[37vh]">
        <BlurImage image={IMG_PATH + movie.poster_path} />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {movie.original_title}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {movie.original_language}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">{movie.vote_count}</p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">
              {movie.vote_average}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
}

export default MovieCard;

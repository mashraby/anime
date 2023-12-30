"use client";

import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

import Image from "next/image";

import { fetchMovies } from "@/lib/actions/movie.actions";

let page = 2;

export type MovieCardProp = JSX.Element;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<MovieCardProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchMovies(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  });

  
  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 z-20">
        {data}
      </section>

      <section className="flex justify-center items-center w-full z-20">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;

"use server";

import MovieCard, { MovieProp } from "@/components/MovieCard";
import { BASE_URL, SEARCH_BASE_URL } from "@/constants";

export const fetchMovies = async (page: number) => {
  const response = await fetch(BASE_URL + `&page=${page}`);

  const data = await response.json();

  return (
    data.results.length &&
    data.results.map((item: MovieProp, index: number) => (
      <MovieCard key={item.id} movie={item} index={index} />
    ))
  );
};

export const fetchSearchMovies = async (page: number, query: string) => {
  const response = await fetch(
    SEARCH_BASE_URL + `&page=${page}&query=${query}`
  );

  const data = await response.json();

  return (
    data.results.length &&
    data.results.map((item: MovieProp, index: number) => (
      <MovieCard key={item.id} movie={item} index={index} />
    ))
  );
};

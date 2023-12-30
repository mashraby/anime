import { fetchMovies, fetchSearchMovies } from "@/lib/actions/movie.actions";
import LoadMore from "../../components/LoadMore";
import SearchBar from "@/components/SearchBar";

async function Home() {
  const movies = await fetchMovies(1);

  return (
    <main id="movies" className="sm:p-16 py-16 px-8 flex flex-col gap-10 z-50">
      <SearchBar />

      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mx-auto z-40">
        {movies}
      </section>

      <LoadMore />
    </main>
  );
}

export default Home;

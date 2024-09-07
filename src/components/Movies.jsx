import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

export default function Movies({
  watchlist,
  handleWatchlist,
  removeFromWatchlist,
}) {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const handlePrev = () => {
    if (pageNum > 1) {
      console.log(pageNum);
      setPageNum(pageNum - 1);
    }
  };
  const handleNext = () => {
    setPageNum(pageNum + 1);
  };
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=c337de45c690a659ac5d9f74c8e9cec8&language=en-US&page=${pageNum}`
      )
      .then(function (res) {
        console.log(res);
        setMovies(res?.data?.results);
      });
  }, [pageNum]);

  return (
    <div className="p-5">
      <div className="m-3 text-2xl font-bold text-center">Trending Movies</div>
      <div className="flex  flex-wrap justify-around gap-8">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              obj={movieObj}
              watchlist={watchlist}
              handleWatchlist={handleWatchlist}
              removeFromWatchlist={removeFromWatchlist}
            />
          );
        })}
      </div>
      <Pagination
        pageNum={pageNum}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
}

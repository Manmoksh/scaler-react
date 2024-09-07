import { useEffect, useState } from "react";
import { genres } from "../utilities/genre_id";
export default function Watchlist({
  watchlist,
  setWatchlist,
  removeFromWatchlist,
}) {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [currentGenre, setCurrentGenre] = useState("All Genres");
  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function handleFilter(genre) {
    setCurrentGenre(genre);
  }
  function sortIncreasing() {
    let sortincreased = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchlist([...sortincreased]);
  }
  function sortDecreasing() {
    let sortdecreased = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchlist([...sortdecreased]);
  }
  useEffect(() => {
    let temp = watchlist.map((obj) => {
      return genres[obj.genre_ids[0]];
    });
    temp = new Set(temp);
    setGenreList(["All Genres", ...temp]);
  }, [watchlist]);
  return (
    <>
      <div className="flex justify-center  flex-wrap gap-4 my-4">
        {genreList.map((genre) => (
          <div
            onClick={() => {
              handleFilter(genre);
            }}
            className={
              currentGenre === genre
                ? " flex justify-center items-center h-12 w-36  bg-gray-400 rounded-xl text-white font-bold hover:cursor-pointer"
                : " flex justify-center items-center h-12 w-36  bg-blue-400 rounded-xl text-white font-bold hover:cursor-pointer"
            }
          >
            {genre}
          </div>
        ))}
      </div>
      <div className="flex justify-center my-4">
        <input
          onChange={handleSearch}
          value={search}
          type="text"
          name="search"
          placeholder="Search for Movies"
          className="h-12 w-72 bg-gray-200 outline-none font-semibold px-4"
        />
      </div>
      <div className="border border-gray-200 m-8 rounded-lg overflow-hidden">
        <table className="w-full text-center text-gray-500">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex gap-1.5 justify-center">
                <div onClick={sortIncreasing}>
                  <i class="fa-solid fa-arrow-down hover:cursor-pointer"></i>
                </div>
                <div>Ratings</div>
                <div onClick={sortDecreasing}>
                  <i class="fa-solid fa-arrow-up hover:cursor-pointer"></i>
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {watchlist
              .filter((movieObj) => {
                if (currentGenre === "All Genres") return true;
                else {
                  return genres[movieObj.genre_ids[0]] === currentGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr>
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="h-24 w-40 rounded-xl shadow-black shadow-lg"
                        src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}
                      />
                      <div className="mx-10">{movieObj.title}</div>
                    </td>
                    <td>{movieObj.vote_average.toFixed(2)}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genres[movieObj.genre_ids[0]]}</td>

                    <td
                      className="text-red-400 hover:cursor-pointer"
                      onClick={() => {
                        removeFromWatchlist(movieObj);
                      }}
                    >
                      <i class="fa-solid fa-trash"></i>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}

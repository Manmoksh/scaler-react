import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";
import Banner from "./components/Banner";

function App() {
  let [watchlist, setWatchlist] = useState([]);
  let handleWatchlist = (movieObj) => {
    let newWatchlist = [...watchlist, movieObj];
    localStorage.setItem("movies", JSON.stringify(newWatchlist));
    setWatchlist(newWatchlist);
  };
  let removeFromWatchlist = (movieObj) => {
    let filterWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id;
    });
    localStorage.setItem("movies", JSON.stringify(filterWatchlist));
    setWatchlist(filterWatchlist);
  };
  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
      setWatchlist(movies);
    }
  }, []);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies
                  watchlist={watchlist}
                  handleWatchlist={handleWatchlist}
                  removeFromWatchlist={removeFromWatchlist}
                />
              </>
            }
          />
          <Route
            path="/watchlist"
            element={
              <Watchlist
                watchlist={watchlist}
                setWatchlist={setWatchlist}
                removeFromWatchlist={removeFromWatchlist}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

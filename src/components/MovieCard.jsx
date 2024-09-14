export default function MovieCard({
  obj,
  watchlist,
  handleWatchlist,
  removeFromWatchlist,
}) {
  const { poster_path, title } = obj;
  function doesContain() {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id == obj.id) return true;
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px]  bg-center bg-cover rounded-xl hover:cursor-pointer hover:scale-110 duration-300 flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original${poster_path})`,
      }}
    >
      {doesContain(obj) ? (
        <div
          onClick={() => {
            removeFromWatchlist(obj);
          }}
          className="m-4 h-8 w-8  rounded-lg bg-blue-500/60 flex items-center justify-center text-red-600"
        >
          <i className="fa-solid fa-trash"></i>
        </div>
      ) : (
        <div
          onClick={() => {
            handleWatchlist(obj);
          }}
          className="m-4 h-8 w-8   rounded-lg bg-blue-500/60 flex items-center justify-center"
        >
          <i className="fa-solid fa-square-plus"></i>
        </div>
      )}
      <div className="text-white text-center w-full text-xl p-2 bg-gray-900/60 rounded-b-xl ">
        {title}
      </div>
    </div>
  );
}

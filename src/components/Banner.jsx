export default function Banner() {
  return (
    <div
      className="h-[65vh]  bg-cover flex items-end"
      style={{
        backgroundImage:
          "url(https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg)",
      }}
    >
      <div className=" bg-gray-800/60 text-center w-full text-white text-lg p-4 ">
        Movies
      </div>{" "}
    </div>
  );
}

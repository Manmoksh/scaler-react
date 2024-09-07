export default function Pagination({ handlePrev, handleNext, pageNum }) {
  return (
    <div className="bg-gray-500 p-4 mt-4 flex justify-center ">
      <div onClick={handlePrev} className="px-8  hover:cursor-pointer ">
        <i className="fa-solid fa-arrow-left   hover:text-white"></i>
      </div>
      <div className="font-bold">{pageNum}</div>
      <div onClick={handleNext} className="px-8 hover:cursor-pointer">
        <i className="fa-solid fa-arrow-right  hover:text-white"></i>
      </div>
    </div>
  );
}

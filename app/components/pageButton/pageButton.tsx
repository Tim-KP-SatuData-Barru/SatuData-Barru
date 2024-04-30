import React from "react";
import { useState } from "react";

interface PageButtonProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
  

function PageButton({ currentPage, totalPages, onPageChange }: PageButtonProps) {
  const maxNum = totalPages;

  const [pageNum, setPageNum] = useState(1);

  const handleDecrease = () => {
    setPageNum((prevPageNum) => Math.max(prevPageNum - 1, 1));
    onPageChange(Math.max(currentPage - 1, 1));
  };

  const handleIncrease = () => {
    setPageNum((prevPageNum) => Math.min(prevPageNum + 1, maxNum));
    onPageChange(Math.min(currentPage + 1, totalPages));
  };

  const handlePageChange = (number: number) => {
    setPageNum(number);
    onPageChange(number);
  };

  const arrInit = (_: any, index: number) => {
    if (pageNum === 1) {
      return index + 1;
    } else if (pageNum === maxNum) {
      return pageNum - 2 + index;
    } else {
      return pageNum - 1 + index;
    }
  };

  return (
    <div className="flex flex-row gap-[20px] justify-center mb-8">
      <button onClick={handleDecrease} className="flex justify-center items-center w-[3vw] h-[3vw] border-2 border-blue-dark bg-white text-blue-dark px-4 py-2 rounded-full">{"<"}</button>
      {Array.from({ length: 3 }, arrInit).map((number) => number > 0 && number <= maxNum ?  (
        <button onClick={() => handlePageChange(number)} key={number} className={`flex justify-center items-center w-[3vw] h-[3vw] border-2 border-blue-dark px-4 py-2 rounded-full ${number === pageNum ? 'bg-blue-dark text-white' : 'bg-white text-blue-dark'}`}>
          {number}
        </button>
        ) : null
      )} 
      <button onClick={handleIncrease} className="flex justify-center items-center w-[3vw] h-[3vw] border-2 border-blue-dark bg-white text-blue-dark px-4 py-2 rounded-full">{">"}</button>
    </div>
  );
}

export default PageButton;
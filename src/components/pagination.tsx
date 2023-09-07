import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onChangePage,
}) => {
  const renderPageButtons = () => {
    const buttons: JSX.Element[] = [];
    let start = Math.max(currentPage - 1, 1);
    let end = Math.min(start + 3, totalPages);

    if (currentPage > totalPages - 2) {
      start = totalPages - 3;
      end = totalPages;
    }

    const addButtons = (start: number, end: number) => {
      for (let page = start; page <= end; page++) {
        buttons.push(
          <button
            key={page}
            className={`h-[40px] w-[40px] transition-all ease-in-out duration-300 rounded-full text-center flex items-center justify-center cursor-pointer ${
              page === currentPage
                ? "bg-gray-50 font-semibold text-gray-900"
                : "bg-transparent text-gray-600"
            }`}
            onClick={() => onChangePage(page)}
          >
            {page}
          </button>
        );
      }
    };

    addButtons(
      start,
      currentPage + 2 < totalPages - 2 ? start + 2 : currentPage
    );

    buttons.push(
      <span key="ellipsis" className="mb-4 font-bold text-2xl">
        &hellip;
      </span>
    );

    addButtons(
      currentPage + 2 < totalPages - 2 ? end : currentPage + 1,
      currentPage + 2 < totalPages - 2 ? end + 2 : end
    );

    return buttons;
  };

  return (
    <div className="flex items-center justify-between">
      <button
        className={`flex items-center hover:bg-gray-100 rounded-md justify-start gap-3 ${
          currentPage === 1
            ? "pointer-events-none opacity-50 cursor-not-allowed"
            : ""
        } px-2 py-1 mr-2`}
        onClick={() => onChangePage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <span>
          <FiArrowLeft size={20} />
        </span>{" "}
        <span> Previous</span>
      </button>

      <div className="flex items-center justify-center my-auto">
        {renderPageButtons()}
      </div>

      <button
        className={` flex items-center hover:bg-gray-100 rounded-md justify-start gap-3  ${
          currentPage === totalPages ? "pointer-events-none opacity-50" : ""
        } px-2 py-1 ml-2`}
        onClick={() => onChangePage(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <span>Next</span>
        <span>
          <FiArrowRight size={20} />
        </span>{" "}
      </button>
    </div>
  );
};

export default Pagination;

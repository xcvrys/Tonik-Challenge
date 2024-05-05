import React from "react";
import { PaginationProps } from "@types";

const Pagination: React.FC<PaginationProps> = ({
  page,
  setPage,
  totalPages,
}) => {
  const handleNextPage = () => {
    setPage((page % totalPages) + 1);
  };

  const handlePreviousPage = () => {
    setPage((page - 1) % totalPages || totalPages);
  };

  return (
    <div className="Gap_container Pagination">
      <button onClick={handlePreviousPage} disabled={page === 1}>
        Previous
      </button>
      <span>
        <input
          className="Pagination_input"
          type="number"
          value={page}
          onChange={(event) => setPage(parseInt(event.target.value))}
        />{" "}
        of {totalPages} Pages
      </span>
      <button onClick={handleNextPage} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;

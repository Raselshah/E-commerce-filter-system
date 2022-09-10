import React from "react";

const Pagination = ({ dataPerPage, totalData, paginate, currentPage }) => {
  console.log(totalData);
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div class="btn-group flex justify-center mt-6">
      {pageNumber.map((number) => (
        <button
          onClick={() => paginate(number)}
          class={
            number === currentPage
              ? "border-0 text-white text-lg rounded-md bg-primary px-2 mx-1"
              : "border-0 text-lg bg-white text-center mx-4"
          }
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

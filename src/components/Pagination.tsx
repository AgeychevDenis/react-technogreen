import React from 'react';
import ReactPaginate from 'react-paginate';

type PaginationProps = {
   currentPage: number,
   onChangePage: any
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
   return (
      <ReactPaginate
         className='pagination'
         breakLabel="..."
         previousLabel="<"
         nextLabel=">"
         onPageChange={(e) => onChangePage(e.selected + 1)}
         pageRangeDisplayed={6}
         pageCount={3}
         forcePage={currentPage - 1}
      />
   )
}

export default Pagination;
import ReactPaginate from 'react-paginate';

const Pagination = ({ onChangePage }) => {
   return (
      <ReactPaginate
         className='pagination'
         breakLabel="..."
         previousLabel="<"
         nextLabel=">"
         onPageChange={(e) => onChangePage(e.selected + 1)}
         pageRangeDisplayed={6}
         pageCount={3}
         renderOnZeroPageCount={null}
      />
   )
}

export default Pagination;
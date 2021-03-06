import React from 'react';
import Paginate from 'react-paginate';

import './Pagination.css';

const Pagination = ({ pages, onPageChange }) => {
  return (
    <Paginate
      onPageChange={onPageChange}
      pageRangeDisplayed={pages > 5 ? 6 : pages}
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel={<a href="">...</a>} // eslint-disable-line
      pageCount={pages}
      containerClassName="pagination__container justify-content-center"
      pageClassName="page-item page-numbers-style"
      pageLinkClassName="page-link"
      nextClassName="page-item next-button"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
      disabledClassName="disabled"
      activeClassName="active"
    />
  )
}

export default Pagination;

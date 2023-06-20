import React from 'react'
import ReactPaginate from "react-paginate";
import '../../scss/components/utils/Pagination.scss';
import Pagination from 'react-js-pagination';
const DataPagination = ({ pagesCount, onPress }) => {

    const handlePageClick = (data) => {

        onPress(data.selected + 1)
    };
    return (
        <Pagination
            breakLabel="..."
            nextLabel="next"
            onPageChange={handlePageClick}
            marginPagesDisplayed={2}
            pageRangeDisplayed={2}
            pageCount={pagesCount}
            previousLabel="prev"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default DataPagination

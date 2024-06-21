import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPage } from '../store/articlesSlice';

// Define the Pagination functional component
const Pagination = () => {
    // Get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();
    // Select the current page number from the Redux store state
    const currentPage = useSelector(state => state.articles.currentPage);

    return (
        <nav>
            {/* Create an unordered list with Bootstrap pagination classes */}
            <ul className="pagination">
                {/* Previous page button */}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={() => dispatch(setPage(currentPage - 1))}   // Dispatch action to set the previous page
                        disabled={currentPage === 1}   // Disable the button if on the first page
                    >
                        Previous
                    </button>
                </li>
                 {/* Next page button */}
                <li className="page-item">
                    <button
                        className="page-link"
                        onClick={() => dispatch(setPage(currentPage + 1))}  // Dispatch action to set the next page
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;

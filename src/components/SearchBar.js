import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery, setPage } from '../store/articlesSlice';

// Define the SearchBar functional component
const SearchBar = () => {
    // Create a local state for the search query
    const [query, setQuery] = useState('');
    // Get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();

    // Define the function to handle the search form submission
    const handleSearch = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        // Dispatch an action to set the search query in the Redux store
        dispatch(setSearchQuery(query));
        // Dispatch an action to reset the page number to 1
        dispatch(setPage(1));
    };

    return (
        // Create a form with an onSubmit handler
        <form onSubmit={handleSearch} className="mb-3">
            {/* Input field for the search query */}
            <input
                type="text"
                className="form-control"
                placeholder="Search for articles..."
                value={query} // Bind the input value to the local state
                onChange={(e) => setQuery(e.target.value)} // Update the local state on input change
            />
        </form>
    );
};

export default SearchBar;

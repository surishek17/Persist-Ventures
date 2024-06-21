import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../store/articlesSlice';

// Define the CategoryFilter functional component
const CategoryFilter = () => {
    // Get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();
    // Select the current category from the Redux store state
    const category = useSelector(state => state.articles.category);

    // Define the list of categories available for selection
    const categories = ['general', 'business', 'technology', 'entertainment'];

    return (
        <div className="mb-3">
            {/* Create a dropdown (select) element for category selection */}
            <select
                className="form-select"
                value={category}   // Set the current value of the dropdown to the selected category
                onChange={(e) => dispatch(setCategory(e.target.value))}  // Dispatch an action to update the category when the selection changes
            >
                {/* Map over the categories array to create an option element for each category */}
                {categories.map(cat => (
                    
                    <option key={cat} value={cat}>
                        {/* Capitalize the first letter of the category name */}
                        {cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
                ))}
            </select>
        </div>
    );
};

export default CategoryFilter;

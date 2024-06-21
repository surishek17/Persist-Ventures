import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/articlesSlice';

// Define the FavoriteButton functional component
const FavoriteButton = ({ article }) => {
    // Get the dispatch function to send actions to the Redux store
    const dispatch = useDispatch();
    // Select the list of favorite articles from the Redux store state
    const favorites = useSelector(state => state.articles.favorites);
    // Check if the current article is already in the list of favorites
    const isFavorite = favorites.some(fav => fav.title === article.title);

     // Define the function to handle adding/removing the article from favorites
     const handleFavorite = () => {
        if (isFavorite) {
            // If the article is already a favorite, dispatch an action to remove it
            dispatch(removeFavorite(article));
        } else {
            // If the article is not a favorite, dispatch an action to add it
            dispatch(addFavorite(article));
        }
    };

    return (
        // Create a button that calls handleFavorite on click and changes text based on favorite status
        <button onClick={handleFavorite} className="btn btn-secondary">
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
        </button>
    );
};

export default FavoriteButton;

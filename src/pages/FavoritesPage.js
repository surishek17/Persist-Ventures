import React from 'react';
import { useSelector } from 'react-redux';
import ArticleCard from '../components/ArticleCard';

// Define the FavoritesPage functional component
const FavoritesPage = () => {
    // Select the list of favorite articles from the Redux store state
    const favorites = useSelector(state => state.articles.favorites);

    return (
        <div className="container">
            <h1>Favorites</h1>
            <div className="row">
                 {/* Map over the list of favorite articles and render an ArticleCard for each */}
                {favorites.map(article => (
                    <div className="col-md-4" key={article.title}>
                        {/* Pass the article as a prop to the ArticleCard component */}
                        <ArticleCard article={article} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FavoritesPage;

import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';

// Define the ArticleCard component that takes an article object as a prop
const ArticleCard = ({ article }) => (
    // Create a card container
    <div className="card">
        <img src={article.urlToImage} className="card-img-top" alt={article.title} />
        <div className="card-body">
            <h5 className="card-title">{article.title}</h5>
            <p className="card-text">{article.description}</p>
            {/* Link to the detailed view of the article */}
            <Link to={`/article/${article.title}`} className="btn btn-primary">Read More</Link>
            {/* Render the FavoriteButton component, passing the article as a prop */}
            <FavoriteButton article={article} />
        </div>
    </div>
);

export default ArticleCard;


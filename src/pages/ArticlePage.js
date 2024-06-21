import React from 'react';
import { useSelector } from 'react-redux';
import ArticleDetail from '../components/ArticleDetail';

// Define the ArticlePage functional component
const ArticlePage = () => {
    // Select the list of articles from the Redux store state
    const articles = useSelector(state => state.articles.articles);

    return (
        // Container div with Bootstrap class for styling
        <div className="container">
            {/* Pass the articles as a prop to the ArticleDetail component */}
            <ArticleDetail articles={articles} />
        </div>
    );
};

export default ArticlePage;

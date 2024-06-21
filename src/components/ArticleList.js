import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getArticles, searchForArticles } from '../store/articlesSlice';
import ArticleCard from './ArticleCard';
import Pagination from './Pagination';

// Define the ArticleList component
const ArticleList = () => {
    // Initialize dispatch function
    const dispatch = useDispatch();

    // Extract necessary state from the Redux store
    const { articles, status, currentPage, category, searchQuery, searchMode } = useSelector(state => state.articles);

    // useEffect hook to fetch articles when dependencies change
    useEffect(() => {
        if (searchMode) {
            // If search mode is enabled, dispatch the searchForArticles action
            dispatch(searchForArticles({ query: searchQuery, page: currentPage }));
        } else {
            // Otherwise, dispatch the getArticles action based on category and current page
            dispatch(getArticles({ category, page: currentPage }));
        }
    }, [dispatch, category, currentPage, searchQuery, searchMode]);

    // Render loading state
    if (status === 'loading') return <p>Loading...</p>;
    // Render error state
    if (status === 'failed') return <p>Error loading articles.</p>;

    return (
        <div>
            <div className="row">
                {articles.map(article => (
                    <div className="col-md-4" key={article.title}>
                        <ArticleCard article={article} />
                    </div>
                ))}
            </div>
            {/* Render pagination controls */}
            <Pagination />
        </div>
    );
};

export default ArticleList;


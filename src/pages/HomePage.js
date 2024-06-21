import React from 'react';
import ArticleList from '../components/ArticleList';
import CategoryFilter from '../components/CategoryFilter';
import SearchBar from '../components/SearchBar';

// Define the HomePage functional component
const HomePage = () => (
    <div className="container">
        {/* Render the SearchBar component for searching articles */}
        <SearchBar />
        {/* Render the CategoryFilter component for filtering articles by category */}
        <CategoryFilter />
        {/* Render the ArticleList component to display the list of articles */}
        <ArticleList />
    </div>
);

export default HomePage;


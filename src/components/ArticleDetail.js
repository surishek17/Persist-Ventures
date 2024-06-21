import React from 'react';
import { useParams } from 'react-router-dom';

// Define the ArticleDetail component that takes an articles array as a prop
const ArticleDetail = ({ articles }) => {
    // useParams hook to extract the title parameter from the URL
    const { title } = useParams();
    // Find the article object that matches the title parameter
    const article = articles.find(article => article.title === title);

    // If no article is found, display a message
    if (!article) return <p>Article not found</p>;

    return (
        <div>
            <h1>{article.title}</h1>
            <img src={article.urlToImage} alt={article.title} className="img-fluid" />
            <p>{article.content}</p>
        </div>
    );
};

export default ArticleDetail;

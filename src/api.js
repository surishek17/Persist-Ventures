import axios from 'axios';

// API key and base URL for the News API
const API_KEY = '98800ece87fb4b90a97f1bb38989a1de';
const BASE_URL = 'https://newsapi.org/v2';

// Function to fetch top headlines based on category and page number
export const fetchArticles = (category = 'general', page = 1) => {
    return axios.get(`${BASE_URL}/top-headlines`, {
        params: {
            apiKey: API_KEY,    // API key required for authentication
            category: category, // Category of articles to fetch (default: 'general')
            page: page,         // Page number of the results (default: 1)
            pageSize: 10        // Number of articles per page (default: 10)
        }
    });
};

// Function to search for articles based on query and page
export const searchArticles = (query, page = 1) => {
    return axios.get(`${BASE_URL}/everything`, {
        params: {
            apiKey: API_KEY, // API key required for authentication
            q: query,       // Query string to search for articles
            page: page,     // Page number of the results (default: 1)
            pageSize: 10    // Number of articles per page (default: 10)
        }
    });
};
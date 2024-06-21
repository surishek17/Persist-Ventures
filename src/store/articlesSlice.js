import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchArticles, searchArticles } from '../api';


// Async thunk for fetching articles by category and page
export const getArticles = createAsyncThunk(
    'articles/getArticles',
    async ({ category, page }) => {
        const response = await fetchArticles(category, page);
        return response.data;
    }
);

// Async thunk for searching articles by query and page
export const searchForArticles = createAsyncThunk(
    'articles/searchForArticles',
    async ({ query, page }) => {
        const response = await searchArticles(query, page);
        return response.data;
    }
);


// Create a slice for articles
const articlesSlice = createSlice({
    name: 'articles',
    initialState: {
        articles: [], // List of articles
        status: null, // Status of the API call
        error: null, // Error message if the API call fails
        currentPage: 1, // Current page number for pagination
        category: 'general', // Current category for filtering articles
        searchQuery: '', // Current search query
        searchMode: false, // Flag to indicate if search mode is active
        favorites: JSON.parse(localStorage.getItem('favorites')) || []   // List of favorite articles, loaded from localStorage
    },
    reducers: {
        // Reducer to set the current page number
        setPage: (state, action) => {
            state.currentPage = action.payload;
        },
        // Reducer to set the current category and disable search mode
        setCategory: (state, action) => {
            state.category = action.payload;
            state.searchMode = false;
        },
       // Reducer to set the search query and enable search mode
       setSearchQuery: (state, action) => {
        state.searchQuery = action.payload;
        state.searchMode = true;
    },
    // Reducer to add an article to favorites and save to localStorage
    addFavorite: (state, action) => {
        state.favorites.push(action.payload);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    },
    // Reducer to remove an article from favorites and update localStorage
    removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter(article => article.title !== action.payload.title);
        localStorage.setItem('favorites', JSON.stringify(state.favorites));
    }
},
extraReducers: (builder) => {
    builder
        // Handle the pending state of the getArticles thunk
        .addCase(getArticles.pending, (state) => {
            state.status = 'loading';
        })
        // Handle the fulfilled state of the getArticles thunk
        .addCase(getArticles.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.articles = action.payload.articles;
        })
        // Handle the rejected state of the getArticles thunk
        .addCase(getArticles.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
        // Handle the pending state of the searchForArticles thunk
        .addCase(searchForArticles.pending, (state) => {
            state.status = 'loading';
        })
        // Handle the fulfilled state of the searchForArticles thunk
        .addCase(searchForArticles.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.articles = action.payload.articles;
        })
        // Handle the rejected state of the searchForArticles thunk
        .addCase(searchForArticles.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        });
}
});

// Export actions created by the slice
export const { setPage, setCategory, setSearchQuery, addFavorite, removeFavorite } = articlesSlice.actions;
export default articlesSlice.reducer;

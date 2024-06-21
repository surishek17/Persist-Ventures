import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from './articlesSlice';

// Create and configure the Redux store
const store = configureStore({
    // Define the reducers for the store
    reducer: {
        // Assign the articles slice reducer to the articles state
        articles: articlesReducer
    }
});

export default store;

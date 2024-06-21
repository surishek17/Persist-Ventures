import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import FavoritesPage from './pages/FavoritesPage';
import Navigation from './components/Navigation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// Define the main App component
const App = () => (
  // Wrap the entire application with the Redux Provider, passing the store
    <Provider store={store}>
        <Router>
            <Navigation />
            <Routes>
                {/* Route for the HomePage component, accessible at "/" */}
                <Route path="/" element={<HomePage />} />
                {/* Route for the ArticlePage component, accessible at "/article/:title" */}
                <Route path="/article/:title" element={<ArticlePage />} />
                {/* Route for the FavoritesPage component, accessible at "/favorites" */}
                <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
        </Router>
    </Provider>
);

export default App;

import React from 'react';
import { Link } from 'react-router-dom';

// Define the Navigation functional component
const Navigation = () => (
    // Create a navigation bar with Bootstrap classes
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            {/* Link to the homepage with a brand name */}
            <Link className="navbar-brand" to="/">NewsApp</Link>
            <div className="collapse navbar-collapse">
                {/* Define a list of navigation links */}
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    {/* Home navigation item */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    {/* Favorites navigation item */}
                    <li className="nav-item">
                        <Link className="nav-link" to="/favorites">Favorites</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
);

export default Navigation;

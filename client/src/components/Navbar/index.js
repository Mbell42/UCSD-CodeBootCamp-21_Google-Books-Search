// Dependencies
import React from "react"
import { Link } from "react-router-dom;"


// NavBar Component
function NavBar() {
    return (
        <nav className = "navbar-expand-lg navbar-light bg-dark">
            <link className="navbar-brand" to = "/">Google Book Search</link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to = "/">Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to = "/saved">Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
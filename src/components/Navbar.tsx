import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

interface Props {
    // any props you need to pass to the component
}

const NavigationBar: React.FC<Props> = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        // Your logout logic here
        setIsLoggedIn(false);
    }

    return (
        <nav className="navbar">
            <Link to="/" className="navbar__brand">Travel Registry</Link>
            <ul className="navbar__menu">
                <li className="navbar__menu-item"><Link to="/" className="nav-link">Home</Link></li>
                <li className="navbar__menu-item"><Link to="/register-travel" className="nav-link">Register Travel</Link></li>
                <li className="navbar__menu-item"><Link to="/view-travels" className="nav-link">View Travels</Link></li>
            </ul>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link to="/login" className="navbar__menu-item">
                    <button>Login</button>
                </Link>
            )}
        </nav>
    );
    
}

export default NavigationBar;

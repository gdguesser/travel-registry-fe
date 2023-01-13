import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css"

interface Props {
    // any props you need to pass to the component
}

const NavigationBar: React.FC<Props> = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        // Your login logic here
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        // Your logout logic here
        setIsLoggedIn(false);
    }

    return (
        <nav className="navbar">
            <Link className="navbar__brand" to="/">Home</Link>
            <ul className="navbar__menu">
                <li className="navbar__menu-item"><Link to="/register-travel">Register Travel</Link></li>
                <li className="navbar__menu-item"><Link to="/view-travels">View Travels</Link></li>
            </ul>
            {isLoggedIn ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <button onClick={handleLogin}>Login</button>
            )}
        </nav>
    );
}

export default NavigationBar;

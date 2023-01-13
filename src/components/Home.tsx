import React from 'react';
import "../styles/Home.css"

interface Props {
    // any props you need to pass to the component
}

const HomePage: React.FC<Props> = ({}) => {
    return (
        <div className="home-page">
            <h1>Welcome to the Travel Registration App</h1>
            <p>Use the navigation bar to register a new travel or view existing travels</p>
            <button>
                Register new travel
            </button>
        </div>
    );
}

export default HomePage;

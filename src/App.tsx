import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/Navbar';
import HomePage from './components/Home';
import RegisterTravel from './components/TravelRegistration';
import ViewTravels from './components/ViewTravels';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register-travel" element={<RegisterTravel />} />
        <Route path="/view-travels" element={<ViewTravels />} />
      </Routes>
    </Router>
  );
}

export default App;

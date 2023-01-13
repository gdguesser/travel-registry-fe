import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewTravels.css';

interface Props {}

interface Travel {
    id: number;
    origin: string;
    destination: string;
    start_date: string;
    end_date: string;
}

const ViewTravels: React.FC<Props> = () => {
    const [travels, setTravels] = useState<Travel[]>([]);

    useEffect(() => {
        axios.get<Travel[]>('http://localhost:8080/travels')
            .then(response => {
                setTravels(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const handleViewDetails = (id: number) => {
        // Your logic for displaying more details about the travel with the given ID
        console.log(`View details for travel with ID ${id}`);
    }

    return (
        <div className="view-travels-container">
            <h1>View Travels</h1>
            <div className="travels-grid">
                {travels.map(travel => (
                    <div key={travel.id} className="travel-box">
                        <div className="travel-origin">{travel.origin}</div>
                        <div className="travel-destination">{travel.destination}</div>
                        <button className="view-details-button" onClick={() => handleViewDetails(travel.id)}>View Details</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ViewTravels;

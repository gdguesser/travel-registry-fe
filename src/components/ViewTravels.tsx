import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ViewTravels.css"

interface Travel {
    id: number;
    origin: string;
    destination: string;
    start_date: string;
    end_date: string;
}

const ViewTravels: React.FC = () => {
    const [travels, setTravels] = useState<Travel[]>([]);

    useEffect(() => {
        axios.get<Travel[]>('http://localhost:8080/travels')
            .then(response => {
                console.log(response.data.map(travel => travel.id));
                setTravels(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className='view-travels'>
            <h1>View Travels</h1>
            <table>
                <thead>
                    <tr>
                        <th>Origin</th>
                        <th>Destination</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {travels.map(travel => (
                        <tr key={travel.id}>
                            <td>{travel.origin}</td>
                            <td>{travel.destination}</td>
                            <td>{travel.start_date}</td>
                            <td>{travel.end_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewTravels;

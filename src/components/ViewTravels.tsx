import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Travel {
    id: number;
    destination: string;
    start_date: string;
    end_date: string;
}

const ViewTravels: React.FC = () => {
    const [travels, setTravels] = useState<Travel[]>([]);

    useEffect(() => {
        axios.get<Travel[]>('/api/travels')
            .then(response => {
                setTravels(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <h1>View Travels</h1>
            <table>
                <thead>
                    <tr>
                        <th>Destination</th>
                        <th>Start Date</th>
                        <th>End Date</th>
                    </tr>
                </thead>
                <tbody>
                    {travels.map(travel => (
                        <tr key={travel.id}>
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

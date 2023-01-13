import React, { useState } from 'react';
import axios from 'axios';

interface Props {
    // any props you need to pass to the component
}

interface FormData {
    destination: string;
    start_date: string;
    end_date: string;
}

const RegisterTravel: React.FC<Props> = () => {
    const [formData, setFormData] = useState<FormData>({
        destination: '',
        start_date: '',
        end_date: '',
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try {
            await axios.post<FormData>('/api/travels', formData);
            alert("Travel registered!");
        } catch (error) {
            console.log(error);
            alert("Error registering travel!");
        }
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Register Travel</h1>
            <label>
                Destination:
                <input
                    type="text"
                    name="destination"
                    value={formData.destination}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                Start Date:
                <input
                    type="date"
                    name="start_date"
                    value={formData.start_date}
                    onChange={handleInputChange}
                />
            </label>
            <br />
            <label>
                End Date:
                <input
                    type="date"
                    name="end_date"
                    value={formData.end_date}
                    onChange={handleInputChange}
                    />
                    </label>
                    <br />
                    <button type="submit">Register</button>
                    </form>
                    );
                    }
                    
export default RegisterTravel;
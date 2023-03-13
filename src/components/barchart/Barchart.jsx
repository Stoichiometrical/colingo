import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { city: 'Harare', price: 50 },
    { city: 'Kigali', price: 70 },

];


const Chart = () => {
    return (
        <BarChart width={600} height={400} data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="city" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="price" fill="#3880D0" />
        </BarChart>
    );
};

export default Chart;

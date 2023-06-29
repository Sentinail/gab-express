import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CallServer() {
    const [data, setData] = useState([]);

    useEffect(() => {   
        axios.get("http://localhost:5000").then(res => {setData(res.data)})
    }, []);

    return (
        <>
            {data.map(data => {return <h1 key={data.id}> {data.name} </h1>})}
        </>
    )
}

export default CallServer;

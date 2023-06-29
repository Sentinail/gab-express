import React, { useEffect, useState } from 'react';
import axios from 'axios';

function CallServer() {
    const [data, setData] = useState("None");

    useEffect(() => {
        axios.get("http://localhost:5000").then(res => setData(res.data));
    }, []);

    return <div>{data[0].name}</div>;
}

export default CallServer;

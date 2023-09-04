import axios from 'axios';

const serverUrl = 'http://localhost:8080/';

export const api = (uri, method, data) => {
    const config = {
        method: method ? method : 'get',
        url: serverUrl + uri,
        header: {
            'Content-Type': 'application/json',
            // Add more headers as needed
        },
        data: data,
    };
    return axios(config);
}
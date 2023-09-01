import axios from 'axios';

const serverUrl = 'https://github.com/codestates-seb/seb45_main_009/tree/main/server';

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
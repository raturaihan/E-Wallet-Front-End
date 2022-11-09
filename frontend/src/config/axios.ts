import axios from 'axios' 

const instance = axios.create({
    baseURL: 'http://localhost:8080',
    timeout: 60000,
}) 

instance.interceptors.request.use(
    (config) => {
        const newConfig = {
            ...config,
            headers: {
                ...config.headers,
                Authorization: localStorage.getItem('authentication'),
            },
        };
        return newConfig;
    }, 
    (error) => {
        Promise.reject(error);
    }
);

export const handleHTTPResponse = (status: string, message?:string) => {
    switch(status){
        case '0':{
            return new Error('Network Error');
        }
    }
}
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
        case '404': {
            return new Error('Service Not Found')
        }
        case '500': {
            return new Error('Internal Server Error')
        }
        case '400': {
            return new Error(message || '400 Bad Request')
        }
        case '401': {
            return new Error(message || '401 Unauthorized')
        }
        default: {
            return new Error(`${status}${message || ""}`)
        }
    }
}; 

instance.interceptors.response.use(
    (res) => {
        if(res.data?.data.id_token){
            localStorage.setItem("authentication", `Bearer ${res.data.data.id_token}`);
        }
        return res.data;
    }, 
    (err) => {
        const error = err && err.response && err.response.data
        if (error && error.message === 'Invalid credential'){
            localStorage.clear();
            throw new axios.Cancel('Logged Out');
        }else {
            throw err;
        }
    }
)

export default instance;
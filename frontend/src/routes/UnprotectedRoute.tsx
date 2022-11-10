import { useEffect, useState } from "react";
import {Navigate, Outlet} from 'react-router-dom'; 

const UnprotectedRoutes = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const getIsLoginData = () => JSON.parse(localStorage.getItem('authentication') ? 'true' : 'false');

    useEffect(() => {
        setIsLogin(getIsLoginData());
        window.addEventListener('storage', () => {
            setIsLogin(getIsLoginData());
        });
    }, []);

    if (getIsLoginData()) {
        return <Navigate to='/' />;
    }

    return <Outlet />;
}

export default UnprotectedRoutes
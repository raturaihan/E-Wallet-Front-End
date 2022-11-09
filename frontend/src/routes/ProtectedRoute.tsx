import { useEffect, useState } from "react";
import {Navigate, Outlet} from 'react-router-dom'; 

const ProtectedRoutes = () => {
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const getIsLoginData = () => JSON.parse(localStorage.getItem('isLogin') || 'false');

    useEffect(() => {
        setIsLogin(getIsLoginData());
        window.addEventListener('storage', () => {
            setIsLogin(getIsLoginData());
        });
    }, []);

    if (!getIsLoginData()) {
        return <Navigate to='/' />;
    }

    return <Outlet />;
}

export default ProtectedRoutes
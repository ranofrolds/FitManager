import { Outlet, Navigate } from 'react-router'
import Cookies from 'js-cookie';

const LoggedRoutes = () =>{
    const isAuth = Cookies.get('auth_token');
    return isAuth ? <Navigate to="/home"/>:<Outlet/>;
}

export default LoggedRoutes;
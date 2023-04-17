import { Outlet, Navigate } from 'react-router'
import Cookies from 'js-cookie';

const ProtectedRoutes = () =>{
    const isAuth = Cookies.get('auth_token');
    return isAuth ? <Outlet/>:<Navigate to="/"/>;
}

export default ProtectedRoutes;
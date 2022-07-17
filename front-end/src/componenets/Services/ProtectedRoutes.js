import { Navigate, Outlet, Route } from "react-router-dom";
import Signin from "../Signin/Signin";


const useAuth = () => {
    const user = { login: false };
    return user && user.login
}

const ProtectedRoute = () => {
    const isAuth = useAuth();

    return (
        <>
            {isAuth ? <Outlet /> : <Navigate to="/signin" />
            }
        </>
    )
}
export default ProtectedRoute;
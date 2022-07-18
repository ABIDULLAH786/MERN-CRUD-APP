import { Navigate, Outlet, Route } from "react-router-dom";
import Signin from "../Signin/Signin";
import checkUser from "./checkuser";


const useAuth = () => {
    const token = localStorage.getItem('user');
    // console.log(token)
    // const user = { login: false };
    return token && token.length != 0;

}

const ProtectedRoute = () => {
    const isAuth = useAuth();

    return (
        <>
            {isAuth ? <Outlet /> : <Navigate to="/signin" />}
        </>
    )
}
export default ProtectedRoute;
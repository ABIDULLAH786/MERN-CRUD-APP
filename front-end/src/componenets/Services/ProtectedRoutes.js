import { Navigate, Outlet } from "react-router-dom";


const useAuth = () => {
    const token = localStorage.getItem('user');
    return token && token.length !== 0;

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
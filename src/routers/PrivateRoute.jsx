import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    
    if (loading) {
        return <div className="flex justify-center mt-60 md:mt-72 xl:mt-96">
            <span class="loader"></span>
        </div>
    }
    if (user?.email) {
        return children;
    }

    return <Navigate state={location?.pathname} to='/login' ></Navigate>
};

export default PrivateRoute;
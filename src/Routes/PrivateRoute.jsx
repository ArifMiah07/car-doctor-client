import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {


    const {user, loading} = useContext(AuthContext);

    const location = useLocation();
    console.log(location.pathname);
    if(loading){
        return <img className="w-full" src="https://www.dailyfreepsd.com/wp-content/uploads/2014/03/Moving-Car-Animation-Photoshop-PSD.gif" alt="" />
        // <span className="loading loading-spinner loading-lg"></span>
    }

    if(user?.email){
        return children; 
    }
    return <Navigate state={location.pathname} to={'/login'} replace></Navigate> ;
};

export default PrivateRoute;
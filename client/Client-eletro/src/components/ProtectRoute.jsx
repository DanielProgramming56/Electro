import { Outlet, Navigate } from "react-router-dom";

const ProtectRoute = () => {
    let admin = false;

    return admin ? <Outlet/> : <Navigate to="login"/>
}

export default ProtectRoute
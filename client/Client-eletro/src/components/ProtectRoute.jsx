import { Outlet, Navigate } from "react-router-dom";
import UserChatComponent from "./UserChatComponent";
const ProtectRoute = ({ admin }) => {
  if (admin) {
    let adminAuth = false;
    return adminAuth ? <Outlet /> : <Navigate to="login" />;
  } else {
    let userAuth = false;
    return userAuth ? (
      <div>
        {" "}
        <Outlet /> <UserChatComponent />
      </div>
    ) : (
      <Navigate to="login" />
    );
  }
};

export default ProtectRoute;

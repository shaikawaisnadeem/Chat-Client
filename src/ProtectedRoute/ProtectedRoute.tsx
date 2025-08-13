import Cookies from "js-cookie";
import { Navigate } from "react-router";
import type { ReactNode } from "react";
interface ProtectedRouteProps {
  children: ReactNode;
}
const ProtectedRoute:React.FC<ProtectedRouteProps> = ({children}) => {
    const jwtToken = Cookies.get("jwt_token")
    if (jwtToken){
        return children;
    }
    return <Navigate to='/log-in'/>
}
export default ProtectedRoute
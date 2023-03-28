import { useSelector } from "react-redux";

export default function useAuthRole() {
    const auth = useSelector((state) => state.auth);
    
    if (auth?.accessToken && auth?.user) {
        return auth?.user?.role;
    } else {
        return false;
    }
}
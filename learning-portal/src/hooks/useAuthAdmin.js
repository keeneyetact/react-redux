import { useSelector } from "react-redux";

export default function useAuthAdmin() {
    const auth = useSelector((state) => state.auth);

    if(auth?.accessToken && auth?.user && auth?.role === 'admin') {
        return true;
    } else {
        return false;
    }
}
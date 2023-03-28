import { useSelector } from "react-redux";

export default function useAuthStudent() {
    const auth = useSelector((state) => state.auth);

    if(auth?.accessToken && auth?.user && auth?.role === 'student') {
        return true;
    } else {
        return false;
    }
}
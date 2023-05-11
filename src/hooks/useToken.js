import axios from "axios";
import { useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');
    const getToken = async () => {
        const email = user?.user?.email;
        if (email) {
            const { data } = await axios.post('https://car-fixer.onrender.com/access', { email });
            setToken(data.token);
            localStorage.setItem('token', token);
        }
        else {
            return;
        }
    }
    getToken();
    return [token];
}
export default useToken;
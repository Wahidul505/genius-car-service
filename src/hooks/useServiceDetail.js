import { useEffect, useState } from "react";

const useServiceDetail = id => {
    const [service, setService] = useState({});
    useEffect(() => {
        const url = `https://sheltered-savannah-99198.herokuapp.com/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setService(data)
            });
    }, [id]);
    return [service]
};

export default useServiceDetail;
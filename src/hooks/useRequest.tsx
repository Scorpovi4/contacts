import { useState, useEffect } from "react";

const useRequest = (url: string, options = {}) => {
    const [data, setData] = useState <Response | null> (null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetch(url, options)
            .then((data) => {
                setData(data);
                setLoading(false);
            })
            .catch((error: string) => {
                setError(error);
                setLoading(false);
            });
    }, [url, options]);

    return { data, loading, error };
};

export default useRequest;

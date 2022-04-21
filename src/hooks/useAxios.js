import { useState, useEffect } from 'react';
import apiClient from '../util/apiClient';

const useAxios = (paramData) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const fetchData = async () => {
    const url = paramData ? `/${paramData}` : '';
    setLoading(true);

    try {
      const { data } = await apiClient.get(url);
      setResponse(data);
      setError(null);
    } catch (error) {
      if (error.message.split(' ').pop() === '404') {
        setError({ message: 'Page not found: 404' });
      } else {
        setError(error);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [loading, error, response];
};

export default useAxios;

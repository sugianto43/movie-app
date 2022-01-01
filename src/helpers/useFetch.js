import { useState, useEffect } from 'react';
import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Credentials": true,
};

export const useFetch = ({ category, method, page, start=false }) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const baseURL = `https://api.themoviedb.org/3/movie/${category}?api_key=7dce609a62a53fc505694bb9ab878165&language=en-US&page=${page}`;
    
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await axios.request({
          baseURL,
          method,
          // headers: { ...headers },
        });
        setResponse(result.data);
      } catch (errors) {
        console.log("error", errors.response);
        setError(errors.response);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
  }, [category, page]);

  return { response, error, loading };
};
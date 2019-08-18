import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const searchApi = async termSearch => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 5,
          term: termSearch,
          location: 'san jose',
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
  };

  useEffect(() => {
    searchApi('pasta');
  });

  return [searchApi, results, errorMessage];
};

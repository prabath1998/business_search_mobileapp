import {useState} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [result, setResult] = useState({
    data: null,
    loading: false,
    error: null,
  });

  const searchRestaurants = async (term) => {
    setResult({
      data: null,
      loading: true,
      error: null,
    });

    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 15,
          term,
          location: 'toronto',
        },
      });
      setResult({
        data: response.data.businesses,
        loading: false,
        error: null,
      });
    } catch (error) {
      setResult({
        data: null,
        loading: false,
        error: "Something went wrong..!",
      });
    }
    
  };
  return[result,searchRestaurants];
};

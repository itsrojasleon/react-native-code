import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization:
      'Bearer rPbzm_eNIDfHgWxysPWC2zUISfm6YaeKdNSdi7uiUTQ-lE0nDTdkYDTAi1AivvD_y9qtCPOXVgSUbYkqE0PBNFYbVHedjMkG8WBTaED_239hGsEkISkPkd9gtn5UXXYx',
  },
});

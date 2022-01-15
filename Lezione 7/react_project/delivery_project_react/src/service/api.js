import axios from 'axios';

export const fetchRestaurants = () => {
    const url = 'https://api.pasto.app/api/v2/utils/724/partners.json';
    return axios.get(url);
}


export const fetchRestaurantCategories = (appId) => {
    const url = 'https://api.pasto.app/api/v2/utils/775/categories.json';
    return axios.get(url);

}

export const fetchCategories = () => {
 const url = 'https://fakestoreapi.com/products/categories';
 return axios.get(url);
};

export const fetchHomeProducts = (limit, sort = 'desc') => {
    const url = `https://fakestoreapi.com/products?limit=${limit}&sort=${sort}`;
    return axios.get(url);
};
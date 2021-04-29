import axios from 'axios';

export const fetchRestaurants = () => {
    const url = 'https://api.pasto.app/api/v2/utils/724/partners.json';
    return axios.get(url);
}


export const fetchRestaurantDetails = () => {
    const url = 'https://api.pasto.app/api/v2/utils/724/partners.json';
    return new Promise( (resolve, reject) => {
         axios.get(url).then(response => {})
    })
    
}
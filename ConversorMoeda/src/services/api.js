import axios from 'axios';


//https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=856f740fb0f137faf6a2
//convert?q=USD_PHP&compact=ultra&apiKey=856f740fb0f137faf6a2
///api/v7/convert?q=USD_PHP,PHP_USD&compact=ultra&apiKey=[YOUR_API_KEY]
const api = axios.create({
    baseURL: 'https://free.currconv.com/api/v7/'
});

export default api;
import HTTP from './'

export const getAllCoins = () => HTTP.get('/coins');

export const getCoin = (id) => HTTP.get(`/coins/${id}`);

export const addCoin = (coin) => HTTP.post('/coin/new', coin);

export const deleteCoin = (id) => HTTP.delete(`/coins/${id}`);
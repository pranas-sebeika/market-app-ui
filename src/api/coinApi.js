import HTTP from './'

export const getAllCoins = () => HTTP.get('/coins');

export const getCoin = (id) => HTTP.get(`/coins/${id}`);

export const addCoin = (data) => HTTP.post('/coin/new', data);

export const deleteCoin = (id) => HTTP.delete(`/coins/${id}`);
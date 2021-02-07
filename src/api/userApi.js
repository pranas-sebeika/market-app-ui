import HTTP from './'

export const login = (userCredentials) => HTTP.post('/login', userCredentials)

export const createUser = (newUser) => HTTP.post('/user/new', newUser)
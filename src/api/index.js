import axios from 'axios'

const HTTP = axios.create({
    baseURL: '/v1'
})

export { HTTP as default }
import axios from 'axios'

const HTTP = axios.create({})

HTTP.interceptors.request.use(request => {
    request.headers.authorization = localStorage.getItem("token")
    return request
})

HTTP.interceptors.response.use(response => response, ({response: { status }}) => {
    if (status === 401 || status === 403) {
        window.location.href = "/login"
    }
    // if (status === 404) {
    //     window.location.href = "/404"
    // }
    // if (status === 500) {
    //     window.location.href = "/500"
    // }

})

export { HTTP as default }
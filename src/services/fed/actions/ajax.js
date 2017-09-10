import axios from 'axios'

export const get = (api, body = {}) => axios.get(`http://aapi.ddlass.com${ api }`, body)
export const send = (api, body = {}) => axios.post(`http://aapi.ddlass.com${ api }`, body)

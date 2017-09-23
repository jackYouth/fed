import axios from 'axios'

export const get = (api, body = {}) => axios.get(api, body)
export const send = (api, body = {}) => axios.post(api, body)

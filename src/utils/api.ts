import axios from "axios";

export const open_api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        'content-type': 'application/json',
    }
})

export const auth_api = axios.create({
    baseURL: process.env.API_URL,
    headers: {
        Authorization: `Bearer ${() => getToken()}`
    }
})

const getToken = (): String => {
    return `token`;
}


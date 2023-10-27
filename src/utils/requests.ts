import axios from "axios";
import { open_api } from "./api";

export const getUsers = async () => {
    console.log("open_api", open_api)
    const response = await open_api.get('/users');
    return response.data;
}

export const login = async (userData: any) => {
    console.log("Login user : ", userData);
    let resp;

    await axios.post('http://127.0.0.1:8000/api/SignIn/', userData,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        resp = response;
        // Sauvegarde les informations du user dans le localstorage avec la clé user
    }).catch((error) => {
        console.log("error",error.response)
    })

    return resp;
}

export const createUser = async (userData: any) => {
    let resp;

    await axios.post('http://127.0.0.1:8000/api/SignUp/', userData,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        resp = response;
    }).catch((error) => {
        console.log(error.message)
    })

    return resp;
}
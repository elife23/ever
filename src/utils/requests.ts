import axios from "axios";
import { open_api } from "./api";
import { apiPath } from "./env";
import dashboardPaths from "./routes/dashboard_routes";

export const getUsers = async () => {
    console.log("open_api", open_api)
    const response = await open_api.get('/users');
    return response.data;
}

export const login = async (userData: any) => {
    console.log("Login user : ", userData);
    let resp;

    await axios.post(`${apiPath}SignIn/`, userData,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        resp = response;
        // Sauvegarde les informations du user dans le localstorage avec la clé user
        // console.log("The informations about the conneted User: ", resp );
        // const router = useRouter();
        // "e-u-d" : est everseed user data

        // localStorage.setItem('e-u-d', JSON.stringify(resp.data));
    }).catch((error) => {
        resp = error.response;
        console.log("error login",error.response);
    })

    return resp;
}

export const createUser = async (userData: any) => {
    let resp;

    await axios.post(`${apiPath}SignUp/`, userData,{
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((response) => {
        if ( response.status == 200) {
            resp = response;
        } else {
            console.log("response", response)
        }
    }).catch((error) => {
        console.log(error.response)
    })

    return resp;
}

export const getUserConnectedDatas = () => {
    const datas = localStorage.getItem("e-u-d");
    const testUser =  datas ? JSON.parse(datas) : null;

    return testUser;
}
import { URL_BACKEND } from "../URL_BACKEND";
import jwt_decode from "jwt-decode"

export const getTask = async (id) => {

    const token = localStorage.getItem('appToken-profesor');

    if(!token || token.length < 3) {localStorage.removeItem('appToken-profesor'); return ; }

    const decoded = jwt_decode(token);
   
    if(!decoded) return ;

    const res = await fetch(`${ URL_BACKEND }/get-task/${id}`, {headers: {'access-token': token}})
    const data = await res.json();
    return data.tarea;
}
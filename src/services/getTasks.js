import { URL_BACKEND } from "../URL_BACKEND";
import jwt_decode from "jwt-decode"
import { types } from "../types/types";

export const getTasks = async (id, dispatch) => {

    const token = localStorage.getItem('appToken-profesor');

    if(!token || token.length < 3) {localStorage.removeItem('appToken-profesor'); return ; }

    const decoded = jwt_decode(token);
   
    if(!decoded) return ;

    const res = await fetch(`${ URL_BACKEND }/get-tasks/${id}`, {headers: {'access-token': token}})
    const data = await res.json();

    dispatch({ type: types.RETURN_TASK, payload: data.tareas});
}
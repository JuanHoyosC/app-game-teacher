import { URL_BACKEND } from "../URL_BACKEND";
import jwt_decode from "jwt-decode"
import { types } from "../types/types";
import { login } from "../actions/auth";

export const getUser = async (dispatch) => {

    const token = localStorage.getItem('appToken-profesor');

    if(!token || token.length < 3) {localStorage.removeItem('appToken-profesor'); return ; }

    const decoded = jwt_decode(token);
   
    if(!decoded) return ;

    const res = await fetch(`${ URL_BACKEND }/getprofesor/${decoded.token._id}`, {headers: {'access-token': token}})
    const data = await res.json();

    if(!data.continuar) { dispatch({ type: types.LOGOUT }); return ; }

    dispatch(login({...data.profesor}));
}
import { URL_BACKEND } from "../URL_BACKEND";

export const getPicture = async (foto) => {
    const token = localStorage.getItem('appToken-profesor');
    const res = await fetch(`${URL_BACKEND}/getPicture`, { method: 'POST', headers: { 'content-type': 'application/json', 'access-token': token }, body: JSON.stringify({ path: foto }) })
    const data = await res.blob();

    return URL.createObjectURL(data);
}
import { useState } from 'react'
import { urlBase64ToUint8Array } from '../services/urlBase64ToUint8Array';
import jwt_decode from "jwt-decode"
import { alertaWarning } from '../services/alertas';
import { URL_BACKEND } from '../URL_BACKEND';
import { login } from '../actions/auth';


const PUBLIC_APY_KEY = "BDjsBZpL71_3LP3aqWyWZjlXBnaVJ96NLSBkKzsAvNIQ52rHrdoJOmm3skil66D-3z4GHzKw_ZDBZFTT2FCbUoA";

export const useLogin = (form, dispatch, history) => {

    const [loading, setLoading] = useState(false);

    const subscribe = async (id) => {
        const path = `${process.env.PUBLIC_URL}/worker.js`;
        const register = await navigator.serviceWorker.register(path, {
            scope: '/'
        })

        const subscription = await register.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: urlBase64ToUint8Array(PUBLIC_APY_KEY)
        })

        await fetch(`${ URL_BACKEND }/loginsubscription-teacher`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify({subscription, _id: id}) })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const res = await fetch(`${ URL_BACKEND }/login-teacher`, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(form) });
        const data = await res.json()
        if(!data.continuar) alertaWarning(data.mensaje);
        if (data.continuar) {
            localStorage.setItem('appToken-profesor', data.token);
            const decoded = jwt_decode(data.token);
            console.log(decoded.token)
            dispatch(login(decoded.token));
            history.push('/');
            await subscribe(decoded.token._id);
        }


    }

return [handleSubmit, loading];

}

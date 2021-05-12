import { alertaDone, alertas, alertaWarning } from "../services/alertas";
import { URL_BACKEND } from "../URL_BACKEND";

export const useTareas = (form, fileA, curso_id, handleReset) => {

    const token = localStorage.getItem('appToken-profesor');


    const handleAddTarea = async (e) => {
        e.preventDefault();


        if(!curso_id){
            alertaWarning('No hay creado un curso');
            return ;
        }


        const { titulo, comentario, puntaje, file } = form;
        if (titulo.trim() !== '' && comentario.trim() !== '' && (puntaje <= 5 && puntaje >= 1)) {
            if (file !== '') {
                const fileRes = await subirArchivo();
                await enviar({ ...fileRes, id_curso: curso_id });
            } else {
                await enviar({ id_curso: curso_id });
            }
            alertaDone('Tarea creada con exito');
            handleReset(e);
        } else {
            alertas('Debe llenar todos los campos obligatorios');
        }
    }

    const enviar = async (resto = {}) => {
        const res = await fetch(`${URL_BACKEND}/add-task`, { method: 'POST', headers: { 'access-token': token, 'content-type': 'application/json' }, body: JSON.stringify({ ...form, ...resto }) })
        await res.json();
    }

    const subirArchivo = async () => {
        let formData = new FormData();
        formData.append('', fileA);
        const res = await fetch(`${URL_BACKEND}/upload-task-file`, { method: 'POST', body: formData });
        const data = await res.json()
        return data;
    }



    return { handleAddTarea }

}

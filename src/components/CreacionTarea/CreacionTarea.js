import React from 'react'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm'
import { useTareas } from '../../hooks/useTareas';

export const CreacionTarea = () => {

    const { curso_id } = useSelector(state => state.auth);
    const { form, handleInputChange, handleFile, fileA , handleReset } = useForm({ titulo: '', comentario: '', puntaje: 1, fecha: '', file: '' });
    const { titulo, comentario, puntaje, fecha, file } = form;
    const { handleAddTarea } = useTareas(form, fileA, curso_id, handleReset);


    return (
        <form className="form-tareas" autoComplete="off" onSubmit={handleAddTarea}>
            <p className="nueva-tarea text-center">CREAR UNA NUEVA TAREA</p>
            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="tituloTarea" className="form-label">TITULO DE LA TAREA</label>
                    <input className="form-control" type="text" id="tituloTarea" name="titulo" value={titulo}
                        onChange={handleInputChange} required />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="puntos" className="form-label">PUNTAJE</label>
                    <input className="form-control" type="number" id="puntos"
                        name="puntaje" value={puntaje} min="1" max="5"
                        onChange={handleInputChange} required />
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="comentario" className="form-label">COMENTARIO</label>
                <textarea className="form-control" id="comentario" rows="3" name="comentario" value={comentario}
                    onChange={handleInputChange} required></textarea>
            </div>

            <div className="row">
                <div className="col-md-6 mb-3">
                    <label htmlFor="fechaFin" className="form-label">DIA DE LA ENTREGA</label>
                    <input type="date" id="fechaFIn" className="form-control" name="fecha" value={fecha}
                        onChange={handleInputChange} required />
                </div>

                <div className="col-md-6 mb-3">
                    <label htmlFor="fechaFin" className="form-label">SUBIR ARCHIVO (OPCIONAL)</label>
                    <label htmlFor="archivo" className="archivo-label">
                        <input id="archivo" type="file"
                            name="file" value={file} onChange={( e ) => { handleFile( e ); handleInputChange(e); }} />
                        <i className="fas fa-upload me-2"></i>
                        <span>
                            { file.length > 0 ? fileA.name.slice(0, 20) + '...' : 'Subir archivo' }
                        </span>
                    </label>
                </div>
            </div>

            <div className="d-flex div-btn">
                <button className="btn btn-limpiar" onClick={handleReset}>LIMPIAR CAMPOS</button>
                <button className="btn btn-enviar" type="suubmit">CREAR TAREA</button>
            </div>
        </form>
    )
}

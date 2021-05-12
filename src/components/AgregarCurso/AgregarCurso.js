import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useCurso } from '../../hooks/useCurso';
import { useForm } from '../../hooks/useForm';
import './agregarCurso.css';
import { EditarCurso } from './EditarCurso';

export const AgregarCurso = () => {

    const dispatch = useDispatch();
    const { _id, curso: curso_name, curso_id } = useSelector(state => state.auth)

    const { form, handleInputChange } = useForm({ curso: '' });
    const { handleSubmit, loading } = useCurso(form, _id, dispatch);
    const { curso } = form;

    return (
        <>
            { !curso_name ?
                <form className="d-flex justify-content-end form-crear-curso" autoComplete="off" onSubmit={handleSubmit}>
                    <input className="form-control form-control-sm" type="text"
                        placeholder="Nombre del curso" name="curso" value={curso} onChange={handleInputChange} />
                    <button className="btn btn-crear-curso" type="submit" disabled={ loading }>
                        {loading ?
                            <div className="div-spinner">
                                <div class="spinner-border text-white" role="status">
                                </div> Creando...
                            </div>
                            :
                            <span> Crear curso </span>
                        }
                    </button>
                </form>
                :
                <div className="d-md-flex justify-content-between info-curso">
                    <span className="d-flex mb-3 align-items-center nombre-curso">{curso_name} <i className="fas ms-2 fa-edit" data-bs-toggle="modal" data-bs-target="#modalEditar"></i></span>
                    <span className="codigo-curso">Id: {curso_id}</span>
                </div>
            }

            <EditarCurso  curso_name={ curso_name } id_profesor={ _id } dispatch={ dispatch }/>
        </>
    )
}

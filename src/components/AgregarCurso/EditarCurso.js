import React from 'react'
import { useCurso } from '../../hooks/useCurso';
import { useForm } from '../../hooks/useForm'

export const EditarCurso = ({ curso_name, id_profesor, dispatch }) => {

    const { form, handleInputChange } = useForm({ curso: curso_name });
    const { curso } = form;
    const { handleUpdateName, loading } = useCurso(form, id_profesor, dispatch)

    return (
        <div className="modal fade" id="modalEditar" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header d-flex justify-content-between align-items-center">
                        <h5 className="m-0">Editar nombre del curso</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form onSubmit={handleUpdateName} autoComplete="off">
                            <input className="form-control form-control-sm" type="text"
                                placeholder="Nombre del curso" name="curso" value={curso} onChange={handleInputChange} />
                            <button className="btn btn-editar-curso m-0 mt-4" type="submit" disabled={loading} data-bs-toggle="modal" data-bs-target="#modalEditar" >
                                {loading ?
                                    <div className="div-spinner">
                                        <div className="spinner-border text-white" role="status">
                                        </div> Editando
                            </div>
                                    :
                                    <span> Editar </span>
                                }
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

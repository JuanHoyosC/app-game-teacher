import { types } from "../types/types";

export const login = ( usuario ) => ({
    type: types.LOGIN,
    payload: {  ...usuario  }
})

export const actualizarCurso = ( curso) => {
    return ({ type: types.UPDATE_NAME, payload: curso })
}
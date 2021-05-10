import { types } from '../types/types';


export const taskReducer = (state = [], action) => {
    switch (action.type) {
        case types.ADD_TASK:
            return [...state, action.payload];
        
        case types.RETURN_TASK: 
            return [...action.payload];

        case types.DELETE_TASK:
            return state.filter(tarea => tarea._id !== action.payload)

        default:
            return state;
    }
}

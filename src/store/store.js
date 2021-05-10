import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { authReducer } from '../reducers/authReducer';
import thunk from 'redux-thunk';
import { taskReducer } from '../reducers/tareasReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    auth: authReducer,
    tareas: taskReducer
})


export const store = createStore( 
    reducers, 
    composeEnhancers(
        applyMiddleware( thunk )
    )
);
import React from 'react'
import './menuLateral.css';
import  { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../../types/types';


export const MenuLateral = () => {
    
    const dispatch = useDispatch();
    const { nombre, apellidos, foto } = useSelector(state => state.auth)
   

    const hanledlogout = () => {
        dispatch({type: types.LOGOUT});
        localStorage.removeItem('appToken-profesor');
    }

    return (
        <div className="offcanvas menuLateral offcanvas-end" tabIndex="-1" id="menuLateral" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header text-white">
                <h5 id="offcanvasRightLabel">{  nombre } { apellidos }</h5>
                <i className="fas fa-bars" data-bs-dismiss="offcanvas" aria-label="Close"></i>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-between">
                <img src={ foto } alt="foto-profesor" />
                <Link to='/login' className="off btn" onClick={ hanledlogout } data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-power-off"></i></Link>
            </div>
        </div>
    )
}

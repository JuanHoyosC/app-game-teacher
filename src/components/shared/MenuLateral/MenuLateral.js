import React, { useEffect } from 'react'
import './menuLateral.css';
import  { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { types } from '../../../types/types';
import { getPicture } from '../../../services/getPicture';
import { useState } from 'react';

export const MenuLateral = () => {
    
    const dispatch = useDispatch();
    const { nombre, apellidos, foto } = useSelector(state => state.auth)
    const [picture, setPicture] = useState('')

    useEffect(() => {
        
        getPicture(foto).then(url => setPicture(url));
    }, [foto])


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
                <img src={ picture } alt="foto-profesor" />
                <Link to='/login' className="off btn" onClick={ hanledlogout } data-bs-dismiss="offcanvas" aria-label="Close"><i className="fas fa-power-off"></i></Link>
            </div>
        </div>
    )
}

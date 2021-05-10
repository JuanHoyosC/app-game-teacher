import React from 'react'
import { Switch, Route, Redirect } from "react-router-dom";

import './app.css';
import { Dashboard } from './Home/dashboard/Dashboard';
import { NavBar } from '../components/shared/NavBar/NavBar';
import { Tareas } from './Home/Tareas/Tareas';
import { NotFound } from './Home/NotFound/NotFound';
import { Mision } from './Home/Mision/Mision';


export const App = () => {
    return (
        <>
            <div className="bg-home">
                <NavBar />
                <div>
                    <div className="container mt-4">
                        <Switch>
                            <Route  exact path="/tareas" component={ Tareas } />
                            <Route  exact path="/mision/:id" component={ Mision } />
                            <Route  exact path="/notFound" component={ NotFound } />
                            <Route  exact path="/" component={ Dashboard } />
                            <Redirect to="/notFound" />
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

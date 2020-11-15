import React from 'react';

import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
export default function Nav () {

    return (
        <div className="nav">
            <NavLink to='/dashboard'>Tableau de bord</NavLink>
            <NavLink to='/dashboard/commandes'>Commandes</NavLink>
            <NavLink to='/dashboard/inventaire'>Inventaires</NavLink>
            <NavLink to='/dashboard/mail'>Mails</NavLink>
        </div>
    )
}
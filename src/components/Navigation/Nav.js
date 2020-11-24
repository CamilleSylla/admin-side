import React from 'react';

import './Nav.css';
import { Link, NavLink } from 'react-router-dom';
import Check from '../../assets/checklist.svg'
import Txt from '../../assets/text.svg'
import Mail from '../../assets/mail.svg'
import Home from '../../assets/home.svg'
export default function Nav() {

    return (
        <div className="nav">
            <NavLink to='/dashboard'
                activeStyle={{
                    fontWeight: "bold",
                    color: "#FF9700"
                }}
            >
                <img src={Home} />
                 Tableau de bord
                 </NavLink>
            <NavLink to='/dashboard/commandes'
                activeStyle={{
                    fontWeight: "bold",
                    color: "#FF9700"
                }}
            >
                <img src={Txt} />
                Commandes
                </NavLink>
            <NavLink to='/dashboard/inventaire'
                activeStyle={{
                    fontWeight: "bold",
                    color: "#FF9700"
                }}
            >
                <img src={Check} />
                Inventaires
                </NavLink>
            <NavLink to='/dashboard/mail'
                activeStyle={{
                    fontWeight: "bold",
                    color: "#FF9700"
                }}
            >
                <img src={Mail} />
                Mails
                </NavLink>
        </div>
    )
}
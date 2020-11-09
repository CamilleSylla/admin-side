import React from 'react';

import './Login.css';
//assets
import ID from '../../../assets/IconicDevLatest.svg'

export default function Login () {

    return (
        <div className="loginContainer">
            <div className="loginCenter">
                <div className="login">
                    <img src={ID} alt="logo"/>
                    <p>Identifiant</p>
                    <input type="text"/>
                    <p>Mot de Passe</p>
                    <input type="text"/>
                </div>
            </div>

        </div>
    )
}
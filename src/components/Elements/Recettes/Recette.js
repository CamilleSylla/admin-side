import React from 'react'


import './Recette.css'

export default function Recettes() {
    const today = new Date().toLocaleDateString()
    return (
        <div className="recetteContainer">
            <h2>Vos Recettes du mois : </h2>
            <p>1300.0€</p>
            <p> le {today}</p>
        </div>
    )
}
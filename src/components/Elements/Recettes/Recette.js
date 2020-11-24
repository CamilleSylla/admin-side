import React, { useContext } from 'react'
import { CommandesContext } from '../../../context/CommandesContext';


import './Recette.css'

export default function Recettes() {

    const [orders, setOrders] = useContext(CommandesContext);
    function Year() {
        return orders.reduce((acc, obj) => acc + obj.total, 0)
    }
    function Month() {
        let Total;
        orders.forEach(date => {
            const today = new Date()
            const firstDay = new Date(today.getFullYear(), today.getMonth(), 1);
            if (today >= new Date(date.date) && firstDay <= new Date(date.date)) {
                Total = orders.reduce((acc, obj) => acc + obj.total, 0)
            }
        })
        return Total
    }

    const today = new Date().toLocaleDateString()
    return (
        <div>
            <div className="recetteContainer">
                <h2>Vos Recettes Total : </h2>
                <p>{Math.round(Year() * 100) / 100} €</p>
                <p> le {today}</p>
            </div>
            <div className="recetteContainer">
                <h2>Vos Recettes du mois : </h2>
                <p>{Math.round(Month() * 100) / 100} €</p>
                <p> le {today}</p>
            </div>
        </div>

    )
}
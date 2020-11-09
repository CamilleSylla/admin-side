import React, { useContext, useEffect, useState } from 'react';
import { CommandesContext } from '../../../context/CommandesContext';
import axios from 'axios';
import './Commandes.css'
export default function Commandes() {


    const [orders, setOrders] = useContext(CommandesContext);
    const [user, setUser] = useState(0)

    const getOrders = async () => {
        const data = await axios.get(`/api/orders`)
            .then(res => {
                return res.data;
            })
        setOrders(data);
        setUser(1)
        console.log(orders);
    }
    useEffect(() => {
        getOrders()
    }, [user])

    const Orders = () => {
        for (let i = 0; i <= orders.length; i++) {
            const display = orders.map((details, i) => {
                const { _id, date, name, total, articles } = details;
                while (i <= orders.length) {
                    const Articles = articles.map((details, i) => {
                        return details.name;
                    })
                    return (
                        <tr>
                            <th>{date}</th>
                            <th>{name}</th>
                            <th> 1 rue de la république</th>
                            <th> {total} €</th>
                    <th>{Articles}</th>
                        </tr>
                    )
                }

            })
            return display
        }
    }
    return (
        <div className="commandesContainer">
            <div className="commandesTable">
                <h1>Dernières commandes</h1>
                <table>
                    <tr className="tableTitle">
                        <th>date</th>
                        <th>Nom</th>
                        <th>adresse</th>
                        <th>Montant</th>
                        <th>produits</th>
                    </tr>
                    {Orders()}
                </table>
                <p> voir toute mes commandes </p>
            </div>
        </div>
    )
}
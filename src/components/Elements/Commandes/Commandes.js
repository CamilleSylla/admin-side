import React, { useContext, useEffect, useState } from 'react';
import { CommandesContext } from '../../../context/CommandesContext';
import axios from 'axios';
import './Commandes.css'
export default function Commandes() {


    const [orders, setOrders] = useContext(CommandesContext);
    const [user, setUser] = useState(0)

    const getOrders = async () => {
        const data = await axios.get(`https://iconic-store-serv.herokuapp.com/api/orders`)
            .then(res => {
                return res.data;
            })
        setOrders(data);
        setUser(1)
    }
    useEffect(() => {
        getOrders()
    }, [user])

    const Orders = () => {
        for (let i = 0; i <= orders.length; i++) {
            const display = orders.map((details, i) => {
                const { date, last_name, first_name, total, articles, adresse, city } = details;
                const Articles = articles.map(name => {
                    const render = <tr>{name.name}</tr>
                    return render
                })
                const Taille = articles.map(taille => {
                    const render = <tr>{taille.size.toUpperCase()}</tr>
                    return render
                })
                const Quantity = articles.map(quantity => {
                    const render = <tr>{quantity.quantity}</tr>
                    return render
                })
                return (
                    <tr>
                        <th>{new Date (date).toLocaleDateString()}</th>
                        <th>{last_name + " " + first_name}</th>
                        <th>{adresse + ", " + city}</th>
                        <th> {total} €</th>
                        <tr className="orderProduct">
                            {Articles}
                        </tr>
                        <th className="orderProduct">{Taille}</th>
                        <th className="orderProduct">{Quantity}</th>

                    </tr>
                )

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
                        <th>Date</th>
                        <th>Nom</th>
                        <th>adresse</th>
                        <th>Montant</th>
                        <th>Produits</th>
                        <th>Taille</th>
                        <th>Quantité</th>
                    </tr>
                    {Orders()}
                </table>
                <p> voir toute mes commandes </p>
            </div>
        </div>
    )
}
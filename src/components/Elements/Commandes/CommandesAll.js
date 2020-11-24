import React, { useContext } from 'react';
import { CommandesContext } from '../../../context/CommandesContext';

import './Commandes.css'
export default function CommandesAll() {
    const [orders, setOrders] = useContext(CommandesContext);
    return (
        <div className="commandesContainer">
            <div className="commandesTable">
                <h1>Dernières commandes</h1>
                <table>
                    <tr className="tableTitle">
                        <th>Date</th>
                        <th>Nom</th>
                        <th>Adresse</th>
                        <th>Montant</th>
                        <th>Produits</th>
                    </tr>

                    {orders.map((order, i) => {
                        return (
                            <tr>
                                <th>{new Date (order.date).toLocaleDateString()}</th>
                        <th>{order.last_name + " " + order.first_name}</th>
                        <th>{order.adresse + ", " + order.city}</th>
                        <th>{order.total} €</th>
                                <th>
                                     
                                         {order.articles.map((item, i) => {
                                             return (
                                                <tr className="orderProduct">
                                                 <th> {item.name} </th>
                                                 <th> { "Taille : " + item.size.toUpperCase()} </th>
                                                 <th> {"Quantité : " + item.quantity} </th>
                                                 </tr>
                                             )
                                         })}
                                    
                                    </th>
                            </tr>
                        )
                    })}

                </table>
            </div>
        </div>
    )
}
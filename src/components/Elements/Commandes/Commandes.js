import React from 'react'; 

import './Commandes.css'
export default function Commandes () {

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
                    <tr>
                        <th>22/11/2020</th>
                        <th>Jean Dupont</th>
                        <th>rue de la république</th> 
                        <th>199.9€</th>
                        <th>jean Slim</th>
                    </tr>
                    <tr>
                        <th>22/11/2020</th>
                        <th>Jean Dupont</th>
                        <th>rue de la république</th> 
                        <th>199.9€</th>
                        <th>jean Slim</th>
                    </tr>
                    <tr>
                        <th>22/11/2020</th>
                        <th>Jean Dupont</th>
                        <th>rue de la république</th> 
                        <th>199.9€</th>
                        <th>jean Slim</th>
                    </tr>
                    <tr>
                        <th>22/11/2020</th>
                        <th>Jean Dupont</th>
                        <th>rue de la république</th> 
                        <th>199.9€</th>
                        <th>jean Slim</th>
                    </tr>
                </table>
                <p> voir toute mes commandes ></p>
            </div>
        </div>
    )
}
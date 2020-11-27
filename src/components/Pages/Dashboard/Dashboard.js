import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from '../../../context/ArticlesContext';
import Commandes from '../../Elements/Commandes/Commandes';
import Recettes from '../../Elements/Recettes/Recette';


import './Dashboard.css' 

export default function Dashboard () {
    const [articles, setArticles ] = useContext(ArticlesContext);
    const [user, setUser] =useState(0)

    
    useEffect( () => {
     axios.get(`https://ecombackenddemo.herokuapp.com//api/publicItem`)
        .then(res => {
            setArticles(res.data);
            console.log(articles);
        })
    }, [user])
    return (
        <div className="dashboard">
            <Commandes/>
            <div className="dashboardGrid">
                <Recettes/>
            </div>
        </div>
    )
}
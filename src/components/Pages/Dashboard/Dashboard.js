import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from '../../../context/ArticlesContext';
import Crud from '../../Elements/Articles/Crud/Crud';
import Commandes from '../../Elements/Commandes/Commandes';
import Recettes from '../../Elements/Recettes/Recette';


import './Dashboard.css' 

export default function Dashboard () {
    const [articles, setArticles ] = useContext(ArticlesContext);
    const [user, setUser] =useState(0)
    const getItems = async () => {
        const data = await axios.get(`/api/publicItem`)
        .then(res => {
            return res.data;
        })
        setArticles(data);
        setUser(1)
        console.log(articles);
    }
    useEffect(() => {
        getItems()
    }, [user])
    return (
        <div className="dashboard">
            <Commandes/>
            <div className="dashboardGrid">
                <Recettes/>
                <Crud/>
            </div>
        </div>
    )
}
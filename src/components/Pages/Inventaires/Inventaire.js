import React, { useContext, useState } from 'react';

import './Inventaire.css';
//assets
import ID from '../../../assets/IconicDevLatest.svg'
import Edit from '../../../assets/edit.svg'
import Delete from '../../../assets/delete.svg'
import { ArticlesContext } from '../../../context/ArticlesContext';

export default function Inventaire() {
    const [articles, setArticles] = useContext(ArticlesContext);

    console.log(articles);
    const Articles = () => {
        for (let i = 0; i <= articles.length; i++) {
            const item = articles.map((details, i) => {
                const { name, category, gender, price, sizes, image } = details;
                console.log(name);

                return (
                    <div className="inventaireBlock">
                        <div className="inventaireGrid">
                            <div className="inventaireItemImg">
                                <img src={image} alt="ItemImg" />
                            </div>
                            <h2>{name}</h2>
                            <h3>{category}</h3>
                            <h3>{gender}</h3>
                            <div>
                                <p>S :{sizes[0].s}</p>
                                <p>M :{sizes[0].m}</p>
                                <p>L :{sizes[0].l}</p>
                                <p>XL :{sizes[0].xl}</p>
                            </div>
                            <h2> Prix: {price}</h2>
                            <div className="modify">
                                <img src={Edit} alt="editer" />
                            </div>
                            <div className="delete">
                                <img src={Delete} alt="supprimer" />
                            </div>
                        </div>
                    </div>
                )
            })
            return item;
        }
    }
    return (
        <div className="inventaireContainer">
            <input type="text" placeholder="Recherche un Article" />
            {Articles()}
        </div>
    )
}
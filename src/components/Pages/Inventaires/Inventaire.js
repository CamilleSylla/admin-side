import React, { useContext, useEffect, useState } from 'react';

import './Inventaire.css';
//assets

import { ArticlesContext } from '../../../context/ArticlesContext';
import Filter from './Filter/Filter';
import Crud from '../../Elements/Articles/Crud/Crud';
import List from './List/List';

export default function Inventaire() {
    const [articles, setArticles] = useContext(ArticlesContext);
    const [filter, setFilter] = useState([])
    console.log(filter);
    console.log(articles);
    //list for Inputs
    const cat = articles.map(a => a.category.toLowerCase());
    const categoryFilter = ([...new Set(cat)]);
    const gender = articles.map(a => a.gender.toLowerCase());
    const genderFilter = ([...new Set(gender)]);
    //Event Listenner

    //Uncheck All checkboxes
    function UncheckAll() {
        const el = document.querySelectorAll("input.checkboxFilter");
        console.log(el);
        for (var i = 0; i < el.length; i++) {
            var check = el[i];
            if (!check.disabled) {
                check.checked = false;
            }
        }
    }

    //SearchBar
    const searchChange = (e) => {
        e.preventDefault();
        const stuff = articles.filter((i) => {
            return i.name.toLowerCase().match(e.target.value.toLowerCase())
        })
        setFilter(stuff)
        UncheckAll(true)
    }


    const Types = (e) => {
        if (e.target.checked === true) {
            const stuff = articles.filter((i) => {
                return i.category.toLowerCase().match(e.target.value.toLowerCase())
            })
            setFilter(stuff)
            console.log(articles);
        } else if (e.target.checked === false) {
            setFilter(articles)
        }
    }
    const Gender = (e) => {
        if (e.target.checked === true) {
            const stuff = filter.filter((i) => {
                console.log(i.category, e.target.value);
                return i.gender.toLowerCase().match(e.target.value.toLowerCase())
            })
            setFilter(stuff)
        } else if (e.target.checked === false) {
            setFilter(articles)
        }
    }
    return (
        <div className="inventaireContainer">
            <input type="text" placeholder="Recherche un Article" onChange={searchChange} />

            <div className="inventaireMenu">
                <Crud />
                <Filter
                    filter={Types}
                    categorys={categoryFilter}
                    genre={genderFilter}
                    target={Gender}
                />
            </div>

            <List filter={filter} articles={articles}/>

        </div>
    )
}
import React, { useContext, useState } from 'react';

import './Inventaire.css';
//assets

import { ArticlesContext } from '../../../context/ArticlesContext';
import DeleteAlert from './Delete/Delete';
import Modify from './Modify/Modify';
import Filter from './Filter/Filter';

export default function Inventaire() {
    const [articles, setArticles] = useContext(ArticlesContext);
    const [filter, setFilter] = useState(articles)
    const [search, setSearch] = useState({})
    //Filters
        //list for Inputs
    const cat = articles.map(a => a.category.toLowerCase());
    const categoryFilter = ([...new Set(cat)]);
    const gender = articles.map(a => a.gender.toLowerCase());
    const genderFilter = ([...new Set(gender)]);
        //Event Listenner
        
    console.log(search);
    
    //SearchBar
    const searchChange = (e) => {
        e.preventDefault();
        const stuff = filter.filter((i) => {
            return i.name.toLowerCase().match(e.target.value.toLowerCase())
        })
        setFilter(stuff)
    }


    const Types = (e) => {
        if (e.target.checked === true) {
            const stuff = filter.filter((i) =>{
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
            const stuff = filter.filter((i) =>{
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
            <input type="text" placeholder="Recherche un Article" onChange={searchChange} value={search.text} />
            <div className="inventaireFilter">
                <Filter 
                filter={Types}
                categorys={categoryFilter}
                genre={genderFilter}
                target={Gender}/>
            </div>
            {filter.map((details, i) => {
                return (
                    <div className="inventaireBlock" >
                        <div className="inventaireGrid">
                            <div className="inventaireItemImg">
                                <img src={details.image} alt="ItemImg" />
                            </div>
                            <h2>{details.name}</h2>
                            <h3>{details.category}</h3>
                            <h3>{details.gender}</h3>
                            <div>
                                <p>S :{details.sizes[0].s}</p>
                                <p>M :{details.sizes[0].m}</p>
                                <p>L :{details.sizes[0].l}</p>
                                <p>XL :{details.sizes[0].xl}</p>
                            </div>
                            <h2> Prix: {details.price}</h2>
                            <div className="modify">
                                <Modify details={details._id} />
                            </div>
                            <div className="delete"  >
                                <DeleteAlert details={details._id} articles={articles} />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
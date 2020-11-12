import React, { useContext, useState } from 'react';

import './Inventaire.css';
//assets
import ID from '../../../assets/IconicDevLatest.svg'

import { ArticlesContext } from '../../../context/ArticlesContext';
import DeleteAlert from './Delete/Delete';
import Modify from './Modify/Modify';
import Filter from './Filter/Filter';

export default function Inventaire() {
    const [articles, setArticles] = useContext(ArticlesContext);
    const [filter, setFilter] = useState({})
    const [search, setSearch] = useState("")

    const searchChange = (e) => {
        e.preventDefault();
        setSearch(e.target.value);
    }
    let target = articles
    if(search.length > 0){
        target = target.filter((i) =>{
            return i.name.toLowerCase().match(search.toLowerCase())
        })
    }else if (filter.length > 0) {
        target = target.filter((i) =>{
            return i.category.toLowerCase().match(filter.toLowerCase())
        })
    }
    console.log(filter);
    return (
        <div className="inventaireContainer">
            <input type="text" placeholder="Recherche un Article" onChange={searchChange} value={search} />
            <div className="inventaireFilter">
                <Filter articles={articles} setFilter={setFilter} filter={filter}/>
            </div>
            {target.map((details, i) => {
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
import React from 'react';

import './Filter.css'

export default function Filter({ articles,  filter, setFilter}) {

    const result = articles.map(a => a.category.toLowerCase());
    const categoryFilter = ([...new Set(result)]);

    const Test = (e) => {
        if(e.target.checked === true) {
            setFilter(e.target.value)
        }else if (e.target.checked === false) {
            setFilter("")
        }
    }
    return (
        <div>
            <div className="filterCategory">
    <p>{categoryFilter}</p>
    <input type="checkbox" onChange={Test} value="veste"/>
            </div>

        </div>
    )
}
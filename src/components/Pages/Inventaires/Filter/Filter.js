import React from 'react';

import './Filter.css'

export default function Filter({filter ,category ,setFilter}) {

    
    

    const Test = (e) => {
        if(e.target.checked === true) {
            setFilter({...filter, category: e.target.value})
        }else if (e.target.checked === false) {
            setFilter({...filter, category: ""})
        }
    }
    const Gender = (e) => {
        if(e.target.checked === true) {
            setFilter({...filter, gender: e.target.value})
        }else if (e.target.checked === false) {
            setFilter({...filter, gender: ""})
        }
    }

    return (
        <div>
            <div className="filterCategory">
    <li>{category}</li>
    <input type="checkbox" onChange={Test} value="t-shirt"/>
    <input type="checkbox" onChange={Gender} value="homme"/>
            </div>

        </div>
    )
}
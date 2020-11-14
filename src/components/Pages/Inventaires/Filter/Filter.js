import React, { useState } from 'react';

import './Filter.css'

export default function Filter({ target ,filter, categorys, setFilter, genre }) {

    return (
        <div className="filterGrid">
            <h1>Type de produit</h1>
            <h1>Genre du produit</h1>
            <div className="filterCategory">
                {categorys.map((details, i) => {
                    return (
                        <li>{details}<input type="checkbox" onChange={filter} value={details} /></li>
                    )
                })}
            </div>
            <div className="filterGender">
                {genre.map((details, i) => {
                    return (
                        <li>{details}<input type="checkbox" onChange={target} value={details} /></li>
                    )
                })}
            </div>
        </div>
    )
}
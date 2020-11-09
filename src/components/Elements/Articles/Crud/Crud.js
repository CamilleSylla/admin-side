import React, { useState } from 'react';
import axios from 'axios';


import './Crud.css'

export default function Crud() {

    const [create, setCreate] = useState({
        name: "",
        category: "",
        gender: "",
        s: "",
        m: "",
        l: "",
        xl: "",
        price: "",
    });

    const nameChange = event => {
        console.log(create.name);
        setCreate({ ...create, name: event.target.value })
    }
    const categoryChange = event => {
        setCreate({ ...create, category: event.target.value })
    }
    const genderChange = event => {
        setCreate({ ...create, gender: event.target.value })
    }
    const sChange = event => {
        console.log(create.s);
        setCreate({ ...create, s: event.target.value })

    }
    const priceChange = event => {
        setCreate({ ...create, price: event.target.value })
    }
     const toSend = {
        name: create.name,
        category: create.category,
        gender: create.gender,
        sizes: [{
            s: create.s,
            m: create.m,
            l: create.l,
            xl: create.xl,
        }],
        price: create.price,
    }
    const onCreate = (e) => {
        axios.post(`/api/produit`, toSend )
            .then(res => {
                console.log(res);
                console.log(create);
                console.log(res.data);
            })
    }


    return (
        <div className="crudContainer">
            <div className="crudGrid">
                <div className="crudAdd">
                    <h1>Creer un article</h1>
                    <input placeholder="Nom" onChange={nameChange} />
                    <input type="text" placeholder="Category" onChange={categoryChange} />
                    <input type="text" placeholder="Genre" onChange={genderChange} />
                    <p> Tailles </p>
                    <input type="text" placeholder="S" onChange={sChange} />
                    <input type="text" placeholder="M" />
                    <input type="text" placeholder="L" />
                    <input type="text" placeholder="XL" />
                    <p>Prix</p>
                    <input type="text" placeholder="Prix" onChange={priceChange} /><br></br>
                    <button onClick={onCreate}>Ajouter</button>
                </div>
            </div>
        </div>
    )
}
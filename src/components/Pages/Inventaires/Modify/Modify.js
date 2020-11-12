import React, { useContext, useState } from 'react';

import './Modify.css'
import Edit from '../../../../assets/edit.svg'
import { ArticlesContext } from '../../../../context/ArticlesContext';
import axios from 'axios';

export default function Modify({ details }) {

    const [articles, setArticles] = useContext(ArticlesContext);
    const [target, setTarget] = useState([]);
    const [menu, setMenu] = useState(false);
    const [modify, setModify] = useState({
       
    })
    const modifyHandler = () => {
        const finder = articles.find(item => item._id === details)
        setTarget(finder);
        console.log(target);
        setMenu(!menu)
    }

    const nameChange = event => {
        setModify({ ...modify, name: event.target.value })
    }
    const categoryChange = event => {
        setModify({ ...modify, category: event.target.value })
    }
    const genderChange = event => {
        setModify({ ...modify, gender: event.target.value })
    }
    const sChange = event => {
        setModify({ ...modify, s: event.target.value })
    }
    const mChange = event => {
        setModify({ ...modify, m: event.target.value })
    }
    const lChange = event => {
        setModify({ ...modify, l: event.target.value })
    }
    const xlChange = event => {
        setModify({ ...modify, xl: event.target.value })
    }
    
    const toSend = {
        ...modify,
        id: target._id
    }
    const modifyValidation = async  () => {
        await axios.patch('/api/produit/update', toSend)
        .then(res => console.log(res))
    }


    let Menu;
    if (menu === true) {
        Menu = <div className="modifyMenu">
            <p onClick={() => setMenu(false)}> X </p>
            <h3><span>Vous Souhaitez Mofier :</span><br/> {target.name}</h3>
            <p>name :</p>
            <input type="text" placeholder={target.name} onChange={nameChange}/>
            <p>categorie :</p>
            <input type="text" placeholder={target.category} onChange={categoryChange}/>
            <p>gender :</p>
            <input type="text" placeholder={target.gender} onChange={genderChange}/>
            <p>Quantité taille S :</p>
            <input type="text" placeholder={target.sizes[0].s} onChange={sChange}/>
            <p>Quantité taille M :</p>
            <input type="text" placeholder={target.sizes[0].m}onChange={mChange}/>
            <p>Quantité taille L :</p>
            <input type="text" placeholder={target.sizes[0].l}onChange={lChange}/>
            <p>Quantité taille XL :</p>
            <input type="text" placeholder={target.sizes[0].xl}onChange={xlChange}/>
            <p>Prix :</p>
            <input type="text" placeholder={target.price + '€'}/>
            <button onClick={modifyValidation}> Modifier </button>
        </div>
    }
    return (
        <div className="modifyContainer" >
            <div>
                <img src={Edit} alt="editer" onClick={modifyHandler} />
                {Menu}
            </div>
        </div>
    )
}
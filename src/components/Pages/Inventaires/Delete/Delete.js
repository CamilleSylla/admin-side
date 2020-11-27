import React from 'react';
import axios from 'axios'
import './Delete.css';

import Delete from '../../../../assets/delete.svg'
export default function DeleteAlert ({details, articles}) {

    

    const deleteViews = async () => {
        
        await axios.delete(('https://iconic-store-serv.herokuapp.com/api/produit/delete'), {data : {id: details}})
        .then(res => {
            alert(res.data);
            
        })
    }

    return (
        <div className="deleteContainer" onClick={deleteViews}>
            {/* <div className="deleteConfirmation">
                <h3>Confirmer la suppression de cette articles ?</h3>
                <button>Suppression</button>
            </div> */}
           <img src={Delete} alt="supprimer" />
        </div>
    )
}
import React from 'react';
import axios from 'axios'
import './Delete.css';

import Delete from '../../../../assets/delete.svg'
export default function DeleteAlert ({details, articles}) {

    

    const deleteViews = async () => {
        
        await axios.delete(('/api/produit/delete'), {data : {id: details}})
        .then(res => {
            console.log(res);
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
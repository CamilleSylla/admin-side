import React, { useContext, useState } from 'react';
import axios from 'axios';
import { storage } from "../../../../firebase/firebase"


import './Crud.css'
import Check from '../../../../assets/check.svg'

export default function Crud() {
    const [create, setCreate] = useState({
        name: "",
        category: "",
        gender: "",
        brand: "",
        s: "",
        m: "",
        l: "",
        xl: "",
        price: "",
        image: "",
        unique: "",
        description: "",
    });
    const allInputs = { imgUrlm: '' }
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)
    const [imageTransferred, setImageTransferred] = useState({
        bytes: 0,
        total: 0,
        nothing: "L'importation d'une image est obligatoire pour créer un produit"
    })

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
    const brandChange = event => {
        setCreate({ ...create, brand: event.target.value })
    }
    const sChange = event => {
        console.log(create.s);
        setCreate({ ...create, s: event.target.value })
    }
    const mChange = event => {
        console.log(create.s);
        setCreate({ ...create, m: event.target.value })
    }
    const lChange = event => {
        console.log(create.s);
        setCreate({ ...create, l: event.target.value })
    }
    const xlChange = event => {
        console.log(create.s);
        setCreate({ ...create, xl: event.target.value })
    }
    const priceChange = event => {
        setCreate({ ...create, price: event.target.value })
    }
    const descChange = event => {
        setCreate({ ...create, description: event.target.value })
    }
    const uniqueChange = event => {
        setCreate({ ...create, unique: event.target.value })
    }
    const toSend = {
        name: create.name,
        category: create.category,
        gender: create.gender,
        brand: create.brand,
        s: create.s,
        m: create.m,
        l: create.l,
        xl: create.xl,
        unique: create.unique,
        price: create.price,
        image: imageAsUrl.imgUrl,
        description: create.description
    }
    const onCreate = (e) => {
        axios.post(`https://ecombackenddemo.herokuapp.com/api/produit`, toSend)
        document.location.reload(true);
    }
    const handleImageAsFile = (e) => {
        const image = e.target.files[0];
        setImageAsFile(imageFile => (image))
        console.log(imageAsFile)
    }
    const handleFireBaseUpload = e => {
        e.preventDefault()
        console.log('start of upload');
        if (imageAsFile === '') {
            console.error(`not an image, the image file is a ${typeof (imageAsFile)}`);
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        uploadTask.on('state_changed',
            (snapShot) => {
                //takes a snap shot of the process as it is happening
                setImageTransferred({
                    ...imageTransferred, 
                    bytes: snapShot.bytesTransferred, 
                    total: snapShot.totalBytes 
                })
            }, (err) => {
                //catches the errors
                console.log(err)
            }, () => {
                // gets the functions from storage refences the image storage in firebase by the children
                // gets the download url then sets the image from firebase as the value for the imgUrl key:
                storage.ref('images').child(imageAsFile.name).getDownloadURL()
                    .then(fireBaseUrl => {
                        setImageAsUrl(prevObject => ({ ...prevObject, imgUrl: fireBaseUrl }))
                    })
            })
    }


    function Progress () {
        const Percent = Math.round((imageTransferred.bytes/imageTransferred.total)*100)
        let Render;
        if (imageTransferred.total <= 0 ) {
        Render = <div className="crudWarning">{imageTransferred.nothing}</div>

        } else if (imageTransferred.total > 0 && Percent < 100) {
            Render = <div>{Percent}%</div>

        } else if (imageTransferred.total > 0 && Percent >= 100) {
        Render = <div className="crudWarning"> <img src={Check} className="crudCheck" alt="ok"/> {Percent}% </div>

        }
        return Render
    }
        
    return (
        <div className="crudContainer">

            <div className="crudGrid">
                <div className="crudAdd">
                    <h1>Creer un article</h1>
                    <p> Classification</p>
                    <input placeholder="Nom" onChange={nameChange} />
                    <input type="text" placeholder="Category" onChange={categoryChange} />
                    <input type="text" placeholder="Genre" onChange={genderChange} />
                    <input type="text" placeholder="Marque" onChange={brandChange} />
                    <textarea onChange={descChange} placeholder="Description du produit"></textarea>
                    <p> Stock </p>
                    <input type="text" placeholder="S" onChange={sChange} />
                    <input type="text" placeholder="M" onChange={mChange} />
                    <input type="text" placeholder="L" onChange={lChange} />
                    <input type="text" placeholder="XL" onChange={xlChange} />
                    <input type="text" placeholder="Taille unique" onChange={uniqueChange} />Taille unique
                    <p>Prix</p>
                    <input type="text" placeholder="Prix" onChange={priceChange} /><br></br>
                    <form>
                        <input type="file" onChange={handleImageAsFile} />
                        <button onClick={handleFireBaseUpload}> Importer </button>
                        {Progress()}
                    </form>
                    <button onClick={onCreate}>Ajouter</button>
                </div>
            </div>
        </div>
    )
}
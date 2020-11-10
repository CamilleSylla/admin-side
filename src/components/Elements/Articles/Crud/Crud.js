import React, { useState } from 'react';
import axios from 'axios';
import { storage } from "../../../../firebase/firebase"


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
        image: "",
    });
    const allInputs = { imgUrlm: '' }
    const [imageAsFile, setImageAsFile] = useState('');
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

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
        image: imageAsUrl.imgUrl
    }
    const onCreate = (e) => {
        axios.post(`/api/produit`, toSend)
            .then(res => {
                console.log(toSend.image);
                console.log(res);
                console.log(create);
                console.log(res.data);
            })
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
                console.log(snapShot)
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
                    <form>
                        <input type="file" onChange={handleImageAsFile} />
                        <button onClick={handleFireBaseUpload}> Importer </button>
                    </form>
                    <button onClick={onCreate}>Ajouter</button>
                </div>
            </div>
        </div>
    )
}
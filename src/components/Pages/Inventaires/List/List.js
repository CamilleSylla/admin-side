import React, { useState } from 'react';
import DeleteAlert from '../Delete/Delete';
import Modify from '../Modify/Modify';

export default function List({ filter, articles }) {
    console.log(filter);
    console.log(articles);

    function show() {
        if (filter.length > 0) {
            return filter.map((details, i) => {
                return (
                    <div className="inventaireBlock" >
                        <div className="inventaireGrid">
                            <div className="inventaireItemImg">
                                <img src={details.image} alt="ItemImg" />
                            </div>
                            <div className="inventaireItemInfos">
                                <h2>{details.name}</h2>
                                <p>{details.brand}</p>
                                <h2> Prix: {details.price}€</h2>
                            </div>
                            <div className="inventaireItemCat">
                                <h3>{details.category}</h3>
                                <h3>{details.gender}</h3>
                            </div>
                            <div className="inventaireItemSizes">
                                <div>
                                    <p>S : {details.s}</p>
                                    <p>M : {details.m}</p>
                                </div>
                                <div>
                                    <p>L : {details.l}</p>
                                    <p>XL : {details.xl}</p>
                                </div>
                            </div>
                            <div className="modify">
                                <Modify details={details._id} />
                            </div>
                            <div className="delete"  >
                                <DeleteAlert details={details._id} articles={articles} />
                            </div>
                            <div className="inventaireDesc">
                                {details.description}
                            </div>
                        </div>
                    </div>
                )
            })
        } else {
            return articles.map((details, i) => {
                return (
                    <div className="inventaireBlock" >
                        <div className="inventaireGrid">
                            <div className="inventaireItemImg">
                                <img src={details.image} alt="ItemImg" />
                            </div>
                            <div className="inventaireItemInfos">
                                <h2>{details.name}</h2>
                                <p>{details.brand}</p>
                                <h2> Prix: {details.price}€</h2>
                            </div>
                            <div className="inventaireItemCat">
                                <h3>{details.category}</h3>
                                <h3>{details.gender}</h3>
                            </div>

                            <div className="inventaireItemSizes">
                                <div>
                                    <p>S : {details.s}</p>
                                    <p>M : {details.m}</p>
                                </div>
                                <div>
                                    <p>L : {details.l}</p>
                                    <p>XL : {details.xl}</p>
                                </div>
                            </div>

                            <div className="modify">
                                <Modify details={details._id} />
                            </div>
                            <div className="delete"  >
                                <DeleteAlert details={details._id} articles={articles} />
                            </div>
                            <div className="inventaireDesc">
                                {details.description}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }



    return (
        <div>
            {show()}
        </div>
    )
}
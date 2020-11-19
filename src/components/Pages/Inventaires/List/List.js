import React, { useState } from 'react';
import DeleteAlert from '../Delete/Delete';
import Modify from '../Modify/Modify';

export default function List({ filter, articles }) {
    console.log(filter);
    console.log(articles);

    function show () {
        if(filter.length > 0) {
            return filter.map((details, i) => {
                return (
                    <div className="inventaireBlock" >
                        <div className="inventaireGrid">
                            <div className="inventaireItemImg">
                                <img src={details.image} alt="ItemImg" />
                            </div>
                            <h2>{details.name}</h2>
                            <h3>{details.category}</h3>
                            <h3>{details.gender}</h3>
                            <div>
                                <p>S :{details.sizes[0].s}</p>
                                <p>M :{details.sizes[0].m}</p>
                                <p>L :{details.sizes[0].l}</p>
                                <p>XL :{details.sizes[0].xl}</p>
                            </div>
                            <h2> Prix: {details.price}</h2>
                            <div className="modify">
                                <Modify details={details._id} />
                            </div>
                            <div className="delete"  >
                                <DeleteAlert details={details._id} articles={articles} />
                            </div>
                        </div>
                    </div>
                )
            })
        }else{
            return articles.map((details, i) => {
                return (
                    <div className="inventaireBlock" >
                        <div className="inventaireGrid">
                            <div className="inventaireItemImg">
                                <img src={details.image} alt="ItemImg" />
                            </div>
                            <h2>{details.name}</h2>
                            <h3>{details.category}</h3>
                            <h3>{details.gender}</h3>
                            <div>
                                {/* <p>S :{details.sizes[0].s}</p>
                                <p>M :{details.sizes[0].m}</p>
                                <p>L :{details.sizes[0].l}</p>
                                <p>XL :{details.sizes[0].xl}</p> */}
                            </div>
                            <h2> Prix: {details.price}</h2>
                            <div className="modify">
                                <Modify details={details._id} />
                            </div>
                            <div className="delete"  >
                                <DeleteAlert details={details._id} articles={articles} />
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
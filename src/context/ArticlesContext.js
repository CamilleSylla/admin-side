import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios'
export const ArticlesContext = createContext();

export function ArticlesProvider(props) {
    const [articles, setArticles] = useState([]);

    async function getArticles () {
        await axios.get(`https://ecombackenddemo.herokuapp.com/api/publicItem`)
        .then(res => {
            setArticles(res.data);
        })
    }
    
    useEffect( () => {
     getArticles();
    }, [])
    
    console.log(articles);
    
    return (
        <ArticlesContext.Provider value={[articles, setArticles]}>
            {props.children}
        </ArticlesContext.Provider>
    );
}
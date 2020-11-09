import React, { useState, createContext, useEffect } from 'react';

export const ArticlesContext = createContext();

export function ArticlesProvider(props) {
    const [articles, setArticles] = useState([]);


    return (
        <ArticlesContext.Provider value={[articles, setArticles]}>
            {props.children}
        </ArticlesContext.Provider>
    );
}
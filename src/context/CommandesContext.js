import React, { useState, createContext, useEffect } from 'react';

export const CommandesContext = createContext();

export function CommandesProvider(props) {
    const [orders, setOrders] = useState([]);


    return (
        <CommandesContext.Provider value={[orders, setOrders]}>
            {props.children}
        </CommandesContext.Provider>
    );
}
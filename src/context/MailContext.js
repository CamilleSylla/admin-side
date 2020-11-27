import Axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

export const MailContext = createContext();

export function MailProvider(props) {
    const [mail, setMail] = useState([]);

    useEffect(() => {
        Axios.get(`https://ecombackenddemo.herokuapp.com/api/mail/all`)
            .then(res => {
                setMail(res.data);
            })
    },[])
    return (
        <MailContext.Provider value={[mail, setMail]}>
            {props.children}
        </MailContext.Provider>
    );
}